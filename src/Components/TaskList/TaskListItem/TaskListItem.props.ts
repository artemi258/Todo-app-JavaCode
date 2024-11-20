export interface ITaskListItemProps {
 id: string;
 text: string;
 isSuccess: boolean;
 changeStatus: (id: string, isSuccess: boolean) => void;
 activatedPopupDelete: (id: string) => void;
}
