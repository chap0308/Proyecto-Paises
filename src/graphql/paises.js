export const endpoint = "https://countries.trevorblades.com";

export const paises = `
    query Paises {
        countries {
        code
        name
        continent{
            name
        }
        }
    }
`;
export const pais = `
    query Pais($id: ID!) {
        country (code: $id){
            code
            name
            capital
            languages{
                name
                native
            }
            states{
                name
            }
            currency
            native
            continent{
                name
            }
        }
    }
`;

export const filtroContinente = `
    query Continente($id: ID!) {
        continent(code: $id) {
        code
        name
        countries {
            code
            name
            capital
            continent{
                name
            }
        }
        }
    }
`;

