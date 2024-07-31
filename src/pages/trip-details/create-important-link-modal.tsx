import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateImportantLinkModalProps {
    closeCreateImportantLinkModal: () => void
}

export function CreateImportantLinkModal({ closeCreateImportantLinkModal }: CreateImportantLinkModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Cadastrar link</h2>
                        <button type='button' onClick={closeCreateImportantLinkModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Todos os convidados podem visualizar os links importantes.
                    </p>
                </div>

                <form className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                        <Tag className='text-zinc-400 size-5' />
                        <input type="text" name='title' placeholder="Título do link" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 px-4 flex-1 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Link2 className='text-zinc-400 size-5' />
                            <input type="url" name='url' placeholder="URL" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark;]" />
                        </div>
                    </div>

                    <Button type="submit" variant="primary" size="full">
                        Salvar link
                    </Button>
                </form>
            </div>
        </div>
    )
}