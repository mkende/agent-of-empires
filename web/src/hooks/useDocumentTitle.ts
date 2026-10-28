import { useEffect } from "react";

const APP_TITLE = "Agent of Empires";

export function useDocumentTitle(sessionTitle: string | undefined): void {
  useEffect(() => {
    document.title = sessionTitle ? `${sessionTitle} - ${APP_TITLE}` : APP_TITLE;
  }, [sessionTitle]);
}
