# Proposta Database e API

Questa proposta descrive una possibile struttura del database relazionale e delle API REST per l'applicazione ERP.

## Struttura del database

### Tabelle principali

- **users**: id, username, password_hash, role (`ADMIN`/`MANAGER`)
- **clients**: id, nome, cognome, email, telefono, indirizzo
- **products**: id, nome, descrizione, premio_annuo
- **payments**: id, client_id, product_id, importo, data_pagamento, metodo
- **reports**: non una tabella dedicata, ma viste/aggregazioni sui dati esistenti.

### Relazioni

- `payments.client_id` → `clients.id`
- `payments.product_id` → `products.id`

## API REST

| Metodo | Endpoint | Descrizione | Ruolo |
|--------|----------|-------------|-------|
| POST   | /api/auth/login | Autenticazione utente | pubblico |
| GET    | /api/users | Elenco profili | ADMIN |
| POST   | /api/users | Creazione profilo | ADMIN |
| PUT    | /api/users/:id | Aggiornamento profilo | ADMIN |
| DELETE | /api/users/:id | Eliminazione profilo | ADMIN |
| GET    | /api/clients | Elenco clienti | ADMIN/MANAGER |
| POST   | /api/clients | Nuovo cliente | ADMIN/MANAGER |
| PUT    | /api/clients/:id | Aggiornamento cliente | ADMIN/MANAGER |
| DELETE | /api/clients/:id | Eliminazione cliente | ADMIN |
| GET    | /api/products | Elenco prodotti | ADMIN/MANAGER |
| POST   | /api/products | Nuovo prodotto | ADMIN |
| PUT    | /api/products/:id | Aggiornamento prodotto | ADMIN |
| DELETE | /api/products/:id | Eliminazione prodotto | ADMIN |
| GET    | /api/payments | Elenco incassi | ADMIN/MANAGER |
| POST   | /api/payments | Registrazione incasso | ADMIN/MANAGER |
| GET    | /api/reports/summary | Reportistica aggregata | ADMIN/MANAGER |

## Tecnologie suggerite

- **Backend**: Node.js con framework NestJS
- **Database**: MySQL
- **Autenticazione**: JWT con refresh token
- **Migrazioni**: TypeORM per gestire schema e versioning

