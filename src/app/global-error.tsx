"use client";

/**
 * Filet de sécurité ultime : capture les erreurs du layout racine lui-même.
 * Doit rendre <html>/<body> car il remplace tout l'arbre.
 */
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#0f172a",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
            Une erreur critique est survenue
          </h1>
          <p style={{ color: "#475569", marginBottom: "1.5rem" }}>
            Veuillez réessayer. Si le problème persiste, contactez
            contact@esat-dz.com.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#dc2626",
              color: "#fff",
              border: 0,
              borderRadius: "9999px",
              padding: "0.9rem 2rem",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
