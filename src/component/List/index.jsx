import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { useLazyQuery } from "@apollo/client";

import styles from "./style.module.css"

const List = ({query, id}) => {

    const location = useLocation()

    const [pengunjung, setPengunjung] = useState()

    const [get_pengunjung, {data, loading, error}] = useLazyQuery(query, {
        onCompleted: (data) => {
            if(id === undefined){
                const newData = [...data.pengunjung]
                setPengunjung(newData)
            }
            else{
                const newData = [data.pengunjung_by_pk]
                setPengunjung(newData)
            }
        },
        onError: (error) => {
            console.log(error)
        }
    })

    useEffect(() => {
        if(id === undefined){
            get_pengunjung()
        }
        else{
            get_pengunjung({variables: {id: id}})
        }
    },[location])

    return (
        <div className={styles.container}>
            { pengunjung === undefined || loading ? (
                <h1>Loading...</h1>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama</th>
                            <th>Umur</th>
                            <th>Jenis Kelamin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pengunjung[0] === null || pengunjung.length === 0 ? (
                            <tr>
                                <td colSpan={4}>Tidak ada data</td>
                            </tr>
                        ) : (
                            pengunjung.map((item, itemIdx) => (
                                <tr key={itemIdx}>
                                    <td>{item.id}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.umur}</td>
                                    <td>{item.jenis_kelamin}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </div>
    )
  }

export default List