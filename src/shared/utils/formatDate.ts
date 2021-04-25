import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDate = (date, formatDate = "dd MMM yyyy") => format(new Date(date), formatDate, {
    locale: ptBR,
});