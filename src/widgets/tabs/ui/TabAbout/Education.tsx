interface EducationProps {
	univer: string;
	post: string;
	code: string;
	grade: string;
	end: string;
}

export const Education = ({ univer, post, grade, code, end }: EducationProps) => {
	return (
		<table className="w-full border-separate border-spacing-0 rounded-xl border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-2 text-center">
			<colgroup>
				<col className="w-48" />
				<col />
			</colgroup>
			<tbody>
				<tr>
					<th className="border-r border-b border-[var(--border-color)] p-2 font-bold text-[var(--text-muted)]">
						Направление:
					</th>
					<td className="border-b border-[var(--border-color)] p-2">
						{code} {post}
					</td>
				</tr>
				<tr>
					<th className="border-r border-b border-[var(--border-color)] p-2 font-bold text-[var(--text-muted)]">
						Университет:
					</th>
					<td className="border-b border-[var(--border-color)] p-2">{univer}</td>
				</tr>
				<tr>
					<th className="border-r border-b border-[var(--border-color)] p-2 font-bold text-[var(--text-muted)]">
						Квалификация:
					</th>
					<td className="border-b border-[var(--border-color)] p-2">{grade}</td>
				</tr>
				<tr>
					<th className="border-r border-[var(--border-color)] p-2 font-bold text-[var(--text-muted)]">
						Период обучения:
					</th>
					<td className="p-2"> {end}</td>
				</tr>
			</tbody>
		</table>
	);
};
