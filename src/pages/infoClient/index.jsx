import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ApiSaibWeb from "../../services";
import "./styles.css";

function InfoClient({}) {
    const params = useParams();
    const [item, setItem] = useState({});
    const [refresh, setRefresh] = useState(false);

    console.log("ID", params.id);

    useEffect(() => {
        getClientId();
    }, [refresh]);

    const getClientId = async () => {
        try {
            const res = await ApiSaibWeb.get(`/cliente/${params.id}`);
            console.log("RES", res);
            setItem(res.data.data[0]);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return <div>{item.TECL_NOME}</div>;
}

export default InfoClient;
