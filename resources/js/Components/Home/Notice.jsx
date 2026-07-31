import { useState } from "react";
import { FaFilePdf, FaSearch, FaEye } from "react-icons/fa";

const notices = [
    {
        id: 1,
        title: "আগামী ০৫ আগস্ট ‘জুলাই গণঅভ্যুত্থান দিবস ২০২৬’ পালন উপলক্ষে কর্মসূচি প্রেরণ।",
        file: "/files/notice-1.pdf",
        date: "২১-০৭-২০২৬",
        category: "admin",
    },
    {
        id: 2,
        title: "বিভিন্ন পদে নিয়োগ বিজ্ঞপ্তি-২",
        file: "/files/notice-2.pdf",
        date: "২০-০৭-২০২৬",
        category: "business",
    },
    {
        id: 3,
        title: "বিভিন্ন পদে নিয়োগ বিজ্ঞপ্তি-১",
        file: "/files/notice-3.pdf",
        date: "২০-০৭-২০২৬",
        category: "business",
    },
    {
        id: 4,
        title: "চাকুরী হতে অব্যাহতিকরণ প্রসঙ্গে (মোঃ রোমেন রায়হান প্রিতম, রেডিও ট্রিপলার)।",
        file: "/files/notice-4.pdf",
        date: "০১-০৭-২০২৬",
        category: "admin",
    },
    {
        id: 5,
        title: "চাকুরী হতে অব্যাহতিকরণ প্রসঙ্গে (মোঃ শহিদুল ইসলাম, সহকারী পরিচালক (এডসকে অপস)।",
        file: "/files/notice-5.pdf",
        date: "০১-০৭-২০২৬",
        category: "admin",
    },
    {
        id: 6,
        title: "চাকুরী হতে অব্যাহতিকরণ প্রসঙ্গে (মোহাম্মদ আবু সাঈদ, পরিচালক (এয়ারওয়ার্থিনেস এন্ড ইঞ্জিনিয়ারিং)।",
        file: "/files/notice-6.pdf",
        date: "০১-০৭-২০২৬",
        category: "admin",
    },
    {
        id: 7,
        title: "Type Technical and IT Examination Result.",
        file: "/files/notice-7.pdf",
        date: "২০-০৬-২০২৬",
        category: "tech",
    },
    {
        id: 8,
        title: "FOOL Examination Result.",
        file: "/files/notice-8.pdf",
        date: "২০-০৬-২০২৬",
        category: "science",
    },
    {
        id: 9,
        title: "PPL Examination Result.",
        file: "/files/notice-9.pdf",
        date: "২০-০৬-২০২৬",
        category: "science",
    },
    {
        id: 10,
        title: "CPL (Composite) Examination Result.",
        file: "/files/notice-10.pdf",
        date: "২০-০৬-২০২৬",
        category: "science",
    },
];

const categoryMap = {
    tech: "tech",
    business: "business",
    admin: "language",
    science: "science",
    design: "design",
    arts: "arts",
};

const categoryLabel = {
    tech: "টেক",
    business: "বিজনেস",
    admin: "প্রশাসনিক",
    science: "বিজ্ঞান",
    design: "ডিজাইন",
    arts: "আর্টস",
};

export default function Notice() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [search, setSearch] = useState("");

    const filtered = notices.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
    );

    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    const paginated = filtered.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
    );

    const handleRowsPerPage = (e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(0);
    };

    return (
        <section className="bg-background text-foreground w-full max-w-full min-w-0">
            <div className="w-full max-w-full min-w-0">
                {/* Toolbar */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative w-full sm:w-64 md:w-72">
                        <FaSearch className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                        <input
                            type="text"
                            placeholder="অনুসন্ধান..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(0);
                            }}
                            className="w-full rounded-lg border border-border bg-card py-2.5 pl-10 pr-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
                        />
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        <label className="whitespace-nowrap text-xs text-muted">
                            প্রতি পৃষ্ঠায়
                        </label>
                        <select
                            value={rowsPerPage}
                            onChange={handleRowsPerPage}
                            className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                        >
                            <option value={5}>৫</option>
                            <option value={10}>১০</option>
                            <option value={25}>২৫</option>
                            <option value={50}>৫০</option>
                        </select>
                    </div>
                </div>

                <div className="w-full min-w-0 max-w-full rounded-xl border border-border bg-card shadow-sm">
                    {/* এই div-এ স্ক্রল হবে */}
                    <div className="w-full overflow-x-auto">
                        <table
                            className="border-collapse text-sm"
                            style={{ minWidth: 920 }}
                        >
                            <thead>
                                <tr className="bg-primary text-primary-foreground">
                                    <th className="w-14 whitespace-nowrap px-4 py-3.5 text-center font-semibold">
                                        নং
                                    </th>
                                    <th className="min-w-[280px] px-4 py-3.5 text-left font-semibold">
                                        শিরোনাম
                                    </th>
                                    <th className="w-28 whitespace-nowrap px-4 py-3.5 text-center font-semibold">
                                        ক্যাটাগরি
                                    </th>
                                    <th className="w-24 whitespace-nowrap px-4 py-3.5 text-center font-semibold">
                                        ফাইল
                                    </th>
                                    <th className="w-32 whitespace-nowrap px-4 py-3.5 text-center font-semibold">
                                        প্রকাশের তারিখ
                                    </th>
                                    <th className="w-28 whitespace-nowrap px-4 py-3.5 text-center font-semibold">
                                        কার্যক্রম
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-border">
                                {paginated.length > 0 ? (
                                    paginated.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="transition-colors hover:bg-muted/40"
                                        >
                                            <td className="whitespace-nowrap px-4 py-3.5 text-center font-medium text-muted">
                                                {page * rowsPerPage + index + 1}
                                            </td>
                                            <td className="min-w-[280px] px-4 py-3.5 font-medium leading-relaxed text-foreground">
                                                {item.title}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3.5 text-center">
                                                <span
                                                    className="label"
                                                    data-industry={
                                                        categoryMap[
                                                            item.category
                                                        ] || "default"
                                                    }
                                                >
                                                    {categoryLabel[
                                                        item.category
                                                    ] || item.category}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3.5 text-center">
                                                <a
                                                    href={item.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-danger/10 text-danger transition-colors hover:bg-danger/20"
                                                >
                                                    <FaFilePdf className="h-4 w-4" />
                                                </a>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3.5 text-center text-muted">
                                                {item.date}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-3.5 text-center">
                                                <a
                                                    href={item.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                                                >
                                                    <FaEye className="h-3 w-3" />
                                                    দেখুন
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={6}
                                            className="px-4 py-10 text-center text-muted"
                                        >
                                            কোনো নোটিশ পাওয়া যায়নি
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
