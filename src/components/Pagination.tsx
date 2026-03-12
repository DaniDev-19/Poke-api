interface PaginationProps {
    count: number;
    limit: number;
    offset: number;
    onChange: (newOffset: number) => void;
}

const Pagination = ({count, limit, offset, onChange}: PaginationProps) => {
      const page = Math.floor(offset / limit) + 1;
      const totalPages = Math.ceil(count / limit);

      return (
        <div className="flex justify-center items-center space-x-4 mt-10">
      <button
        disabled={offset === 0}
        onClick={() => onChange(offset - limit)}
        className="px-3 py-1 bg-gray-200 text-2xl text-black font-bold rounded disabled:opacity-50 cursor-pointer transition-all"
      >
        Anterior
      </button>
      <span>{page} / {totalPages}</span>
      <button
        disabled={offset + limit >= count}
        onClick={() => onChange(offset + limit)}
        className="px-3 py-1 bg-gray-200 text-2xl text-black font-bold rounded disabled:opacity-50 cursor-pointer transition-all"
      >
        Siguiente
      </button>
    </div>
      );
};

export default Pagination;