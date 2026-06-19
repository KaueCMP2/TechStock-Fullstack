import { toast } from "react-toastify"

export const notificacao = (msg: string) => toast.success(msg);
export const erro = (msg: string) => toast.error(msg);

export const toastConfirmarExclusao = (aoConfirmar: () => void) => {
    toast(
        ({ closeToast }) => (
            <div>
                <p>Deseja realmente excluir?</p>

                <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
                    <button style={{ border: "1px solid #0A0B24", padding: "5px 30px 5px 30px", borderRadius: "5px", backgroundColor: "#fff", cursor: "pointer", color: "#0A0B24" }}
                        onClick={() => {
                            aoConfirmar();
                            closeToast();
                        }}
                    >
                        Sim
                    </button>

                    <button onClick={closeToast} style={{ border: "none", padding: "5px 20px 5px 20px", borderRadius: "5px", backgroundColor: "#0A0B24", cursor: "pointer", color: "#fff" }}>
                        Cancelar
                    </button>
                </div>
            </div>
        ),
        {
            autoClose: false,
            closeOnClick: false,
            draggable: false,
        }
    );
};