"use client"

import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ComingSoonDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ComingSoonDialog({ open, onOpenChange }: ComingSoonDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Bientôt disponible</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Cette fonctionnalité sera disponible très prochainement. Nous travaillons activement pour vous offrir la
            meilleure expérience possible.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-6">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
        <DialogFooter className="sm:justify-center">
          <Button type="button" onClick={() => onOpenChange(false)}>
            Fermer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

