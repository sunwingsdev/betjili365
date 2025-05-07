import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Modal = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="">
        <DialogHeader className={"bg-[#14805e] text-white rounded-t-lg"}>
          <DialogTitle className="text-xl px-6 py-4">{title}</DialogTitle>
        </DialogHeader>
        <div className="p-8">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
