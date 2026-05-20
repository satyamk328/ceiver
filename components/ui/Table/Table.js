import Loader from '../Loader/Loader';

export default function Table({
  columns = [],
  data = [],
  loading = false,
  emptyText = 'No records found.',
  className = '',
  onRowClick,
}) {
  return (
    <div className={`table-wrapper ${className}`}>
      {loading ? (
        <div style={{ padding: '3rem 0' }}>
          <Loader text="Loading data…" />
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} style={col.width ? { width: col.width } : {}}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  style={{ textAlign: 'center', padding: '2.5rem 1rem', color: '#6b7280' }}
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={row.id ?? rowIndex}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  style={onRowClick ? { cursor: 'pointer' } : {}}
                >
                  {columns.map((col) => (
                    <td key={col.key}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
