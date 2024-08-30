import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

type Props = {
  open: boolean;
  closeDialog: () => void;
  submitData: () => void;
};

const DeletePopup = ({ open, closeDialog, submitData }: Props) => {
  const dialogClose = () => {
    closeDialog();
  };
  return (
    <Dialog open={open} onOpenChange={dialogClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            Are you sure, you want to delete ?
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex justify-center gap-6">
          <Button
            onClick={() => {
              submitData();
              dialogClose();
            }}
          >
            Yes
          </Button>
          <Button onClick={dialogClose} variant="destructive">
            No
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePopup;
