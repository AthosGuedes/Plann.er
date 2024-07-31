import { Mail, User, X } from "lucide-react";
import { Button } from "../../components/button";

interface ConfirmGuestModalProps {
    closeConfirmGuestModal: () => void
}

export function ConfirmGuestModal({ closeConfirmGuestModal }: ConfirmGuestModalProps) {
    return (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
            <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-lg font-semibold'>Confirmar participação</h2>
                        <button type='button' onClick={closeConfirmGuestModal}>
                            <X className='size-5 text-zinc-400' />
                        </button>
                    </div>
                    <p className='text-sm text-zinc-400'>
                        Você foi convidado(a) para participar de uma viagem para <span className='text-zinc-100 font-semibold'>Florianópolis, Brasil</span> nas datas de <span className='text-zinc-100 font-semibold'>16 a 27 de Agosto de 2024</span>. <br /> <br />
                        Para confirmar sua presença na viagem, preencha os dados abaixo:
                    </p>
                </div>

                <form className='space-y-3'>
                    <div className='h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                        <User className='text-zinc-400 size-5' />
                        <input type="text" name='nome' placeholder="Seu nome completo" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className='h-14 px-4 flex-1 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Mail className='text-zinc-400 size-5' />
                            <input type="email" name='email' placeholder="Seu e-mail" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark;]" />
                        </div>
                    </div>

                    <Button type="submit" variant="primary" size="full">
                        Confirmar presença
                    </Button>
                </form>
            </div>
        </div>
    )
}