import { gql } from "@apollo/client";

export const GET_PENGUNJUNG = gql`
    query get_pengunjung {
        pengunjung{
            id
            nama
            umur
            jenis_kelamin
        }
    }
`

export const GET_PENGUNJUNG_BY_PK = gql`
    query get_Pengunjung_by_pk($id: Int!) {
        pengunjung_by_pk(id: $id) {
            id
            jenis_kelamin
            nama
            umur
        }
    }
`