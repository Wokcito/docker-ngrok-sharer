export interface Agent {
    tunnels: Tunnel[]
    uri: string
    next_page_uri: null | string
}

export interface Tunnel {
    id: string
    public_url?: string
    started_at: Date
    proto?: string
    region: string
    tunnel_session: Endpoint
    endpoint?: Endpoint
    forwards_to: string
}

interface Endpoint {
    id: string
    uri: string
}
