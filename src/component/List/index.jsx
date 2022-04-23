import styles from "./style.module.css"

const List = ({data}) => {

    return (
        <div className={styles.container}>
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
                    {data[0] === null || data.length === 0 ? (
                        <tr>
                            <td colSpan={4}>Tidak ada data</td>
                        </tr>
                    ) : (
                        data.map((item, itemIdx) => (
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
        </div>
    )
  }

export default List