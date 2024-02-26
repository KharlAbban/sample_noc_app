import { redirect } from "react-router-dom";
import {client} from "../../client";

export async function deleteTicketAction({request}) {
    alert(request.path);
}