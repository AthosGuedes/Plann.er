import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps {
    openCreateImportantLinkModal: () => void
}

export function ImportantLinks({ openCreateImportantLinkModal }: ImportantLinksProps) {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gab-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100 ">Reserva do AirBnb</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/1047000113568762587347388437658257368437</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" />
                </div>
                <div className="flex items-center justify-between gab-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100 ">Reserva do AirBnb</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/1047000113568762587347388437658257368437</a>
                    </div>
                    <Link2 className="size-5 text-zinc-400 shrink-0" />
                </div>
            </div>
            <Button onClick={openCreateImportantLinkModal} variant="secondary" size="full">
                <Plus className='size-5' />
                Cadastrar novo link
            </Button>
        </div>
    )
}