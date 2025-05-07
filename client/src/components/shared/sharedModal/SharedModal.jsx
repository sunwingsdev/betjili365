import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SharedModal = ({ triggerText, title, description, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md"
        style={{ backgroundColor: "#14815f" }}
      >
        <DialogHeader style={{ padding: "10px" }}>
          <DialogTitle style={{ color: "#fde047", fontSize: "20px" }}>
            {title}
          </DialogTitle>
          <DialogDescription style={{ color: "#000000" }}>
            {description}
          </DialogDescription>
        </DialogHeader>
        {children && <div>{children}</div>}
      </DialogContent>
    </Dialog>
  );
};

export default SharedModal;
