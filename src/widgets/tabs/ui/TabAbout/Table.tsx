interface TableProps {
	label1: string;
	value1: string;
	label2: string;
	value2: string;
	label3: string;
	value3: string;
}

export const Table = ({ label1, value1, label2, value2, label3, value3 }: TableProps) => {
	return (
		<table className="w-full max-w-md border-separate border-spacing-0 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-2 text-center">
			<tbody>
				<tr>
					<th className="border-r border-b border-[var(--border-color)] p-2 font-bold text-[var(--text-muted)]">
						{label1}
					</th>
					<td className="border-b border-[var(--border-color)] p-2">{value1}</td>
				</tr>
				<tr>
					<th className="border-r border-b border-[var(--border-color)] p-2 font-bold text-[var(--text-muted)]">
						{label2}
					</th>
					<td className="border-b border-[var(--border-color)] p-2">{value2}</td>
				</tr>
				<tr>
					<th className="border-r border-[var(--border-color)] p-2 font-bold text-[var(--text-muted)]">
						{label3}
					</th>
					<td className="p-2">{value3}</td>
				</tr>
			</tbody>
		</table>
	);
};
