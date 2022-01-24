export type ApiLoginData = {
    token: string,
    id: string,
    updatedAt: string
}

export type ApiStatsData = {
    recurrence: number,
    abandonsPaniers: number,
    conversionsPaniers: number,
    conversionsCommandes: number,
    montantTotalVentes: number
}