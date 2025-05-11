(function() {
    const events = {
        AddToCart: () => handleEvent("AddToCart"),
        Purchase: () => handleEvent("Purchase"),
        ViewContent: () => handleEvent("ViewContent")
    };

    const urlEvents = {
        checkout: {
            event: "AddToCart",
            exact: false
        },
        "register=true": {
            event: "AddToCart",
            exact: false
        },
        "c.php?product_id": {
            event: "AddToCart",
            exact: false
        },
        orders: {
            event: "Purchase",
            exact: false
        },
        "&a=pay&order_no": {
            event: "Purchase",
            exact: false
        },
        "order_info.html": {
            event: "Purchase",
            exact: false
        },
        "order-received": {
            event: "Purchase",
            exact: false
        },
        "deposit=success": {
            event: "Purchase",
            exact: false
        }
    };

    const init = () => {
        // 合并URL事件检查
        checkUrlEvents();
        
        // 使用事件委托替代多个监听器
        const debouncedViewContent = debounce(() => {
            handleEvent("ViewContent");
        }, 250);
        
        document.addEventListener('click', (e) => {
            if (e.target.closest('.yuri-cta')) {
                handleEvent("AddToCart");
            }
        }, { passive: true });
        
        document.addEventListener('scroll', debouncedViewContent, { passive: true });
        
        startOnlineCheck();
        sessionManager.init();
        initErrorTracking();
    };

    // 合并URL事件检查
    const checkUrlEvents = () => {
        const currentUrl = window.location.href;
        for (const [urlPart, config] of Object.entries(urlEvents)) {
            if (config.exact ? currentUrl === urlPart : currentUrl.includes(urlPart)) {
                handleEvent(config.event);
                break; // 找到第一个匹配就退出
            }
        }
    };

    // 简化事件队列
    const eventQueue = {
        queue: [],
        maxRetries: 3,
        processing: false,
        
        add(eventData) {
            if (this.queue.length >= 50) {
                this.queue.shift();
            }
            
            this.queue.push({
                data: eventData,
                retries: 0
            });
            
            if (!this.processing) {
                this.process();
            }
        },
        
        async process() {
            if (this.queue.length === 0) {
                this.processing = false;
                return;
            }
            
            this.processing = true;
            const event = this.queue[0];
            
            try {
                const success = await sendEvent(event.data);
                if (success) {
                    this.queue.shift();
                } else {
                    event.retries++;
                    if (event.retries >= this.maxRetries) {
                        this.queue.shift();
                    }
                }
            } catch {
                event.retries++;
                if (event.retries >= this.maxRetries) {
                    this.queue.shift();
                }
            }
            
            if (this.queue.length > 0) {
                setTimeout(() => this.process(), 1000);
            } else {
                this.processing = false;
            }
        }
    };

    // 简化会话管理
    const sessionManager = {
        timer: null,
        lastActivity: Date.now(),
        
        init() {
            this.resetTimer();
            
            // 使用一个统一的事件处理函数
            const events = ['click', 'scroll', 'mousemove', 'keydown'];
            const handler = debounce(() => this.lastActivity = Date.now(), 1000);
            
            // 使用事件委托
            document.addEventListener('click', handler, { passive: true });
            document.addEventListener('scroll', handler, { passive: true });
            window.addEventListener('mousemove', handler, { passive: true });
            window.addEventListener('keydown', handler, { passive: true });
        },
        
        resetTimer() {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                if (Date.now() - this.lastActivity >= 1800000) {
                    handleEvent('session_end');
                }
            }, 60000);
        }
    };

    // 修改配置对象
    const config = {
        debug: false,
        shouldTrack() {
            return true; // 简化逻辑，移除采样率控制
        },
        log(...args) {
            if (this.debug) {
                console.log('[Tracker]', ...args);
            }
        }
    };

    // 修改 handleEvent 使用队列
    const handleEvent = (event, value) => {
        if (!config.shouldTrack()) return;
        
        config.log('Tracking event:', event);

        if (event === "init") {
            setCookie("__api", value);
        } else {
            const requestId = getCookie("__rid");
            eventQueue.add({ requestId, event, value });
        }
    };

    const sendEvent = async (eventData) => {
        const apiCookie = getCookie("__api");
        if (!apiCookie) return;

        try {
            const url = decrypt(atob(apiCookie), "yuri");
            const data = new FormData();
            data.append('_ajax', btoa(decrypt(JSON.stringify(eventData), "yuri")));

            // 优先使用 sendBeacon
            if (navigator.sendBeacon) {
                return navigator.sendBeacon(url, data);
            }

            // 降级使用 fetch
            await fetch(url, {
                method: 'POST',
                body: data,
                keepalive: true
            });
            return true;
        } catch {
            return false;
        }
    };

    const setCookie = (name, value, days = 30) => {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    };

    const getCookie = (name) => {
        const cookieString = document.cookie.split("; ").find(row => row.startsWith(`${name}=`));
        return cookieString ? cookieString.split('=')[1] : null;
    };

    const getQueryParam = (param) => {
        return new URLSearchParams(window.location.search).get(param) || "";
    };

    const decrypt = (data, key) => {
        return [...data].map((char, index) => String.fromCharCode(char.charCodeAt(0) ^ key[index % key.length].charCodeAt(0))).join('');
    };

    // 添加防抖函数
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // 添加在线状态检测函数
    const startOnlineCheck = () => {
        let checkCount = 0;
        const interval = setInterval(() => {
            if (checkCount >= 24 || document.hidden) {
                clearInterval(interval);
                return;
            }
            handleEvent("online");
            checkCount++;
        }, 10000);

        window._onlineCheckInterval = interval;
    };

    const initErrorTracking = () => {
        const errorHandler = debounce((error) => {
            if (error && error.message) {  // 添加错误检查
                handleEvent('error', {
                    message: error.message,
                    url: error.filename,
                    line: error.lineno
                });
            }
        }, 1000);

        window.addEventListener('error', errorHandler, { passive: true });
    };

    (() => {
        const scriptSrc = (document.currentScript || {}).src || "";
        const urlParams = new URLSearchParams(scriptSrc.split("?")[1]);

        const rid = getCookie("__rid") || getQueryParam("_rid") || urlParams.get("_rid") || "";
        const ad_id = getQueryParam("ad_id") || "";

        if (rid && rid.length == 32) {
            setCookie("__rid", rid);
            handleEvent("init", "EQEGGQpPXUYaHRMdVwYaCAsQHxBXERMQVhQCAFYMBxsQKgIAARAe");
            handleEvent("PageView");
            init();

            // 改进页面卸载时的清理
            window.addEventListener('beforeunload', () => {
                if (window._onlineCheckInterval) {
                    clearInterval(window._onlineCheckInterval);
                }
                
                sessionManager.resetTimer();
                eventQueue.clear();
                
                // 发送最后一个事件
                handleEvent('page_exit');
            });
        }

        // 如果没有 rid，

    })();

    window._yuri_track = window._yuri_track || function(event) {
        events[event] && events[event]();
    };

    if (window._yuri_track.queue) {
        window._yuri_track.queue.forEach(([event]) => {
            events[event] && events[event]();
        });
        window._yuri_track.queue = [];
    }
})();
