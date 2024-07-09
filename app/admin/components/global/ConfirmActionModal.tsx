'use client';

import { DialogHeader, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  onCallback: () => void;
  description: string;
  title: string;
  classContainerTrigger?: string;
}



export const ConfirmActionModal = ( { title, children, onCallback, description, classContainerTrigger }: Props ) => {

  return (
    <Dialog>
      <DialogTrigger className={ cn( "flex flex-1 justify-center items-center mt-2", classContainerTrigger ) }>{ children }</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{ title }</DialogTitle>
          <DialogDescription>
            { description }
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <button onClick={ onCallback } className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">{ title }</button>
          </DialogClose>
          <DialogClose>
            Close</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};