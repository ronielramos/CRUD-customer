export type Primitive = number | string | null | undefined | symbol | boolean

export type DefaultObject = { [key: string]: Primitive | JSON | JSON[] } | Error

export type ProviderToken = 'LoggerProvider' | 'CustomerRepository'
