"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

/**
 * Année courante côté client, sans figer celle du build :
 * useSyncExternalStore réconcilie proprement serveur/client
 * (pas d'erreur d'hydratation, pas de setState dans un effet).
 */
export function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getYear, getYear);
  return <>{year}</>;
}
