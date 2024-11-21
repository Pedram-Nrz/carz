import {convertToFarsiDigits} from "../utils/util.ts";
import React, { useState } from 'react';

interface PriceTablePagination {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PriceTablePagination> = ({ totalPages, currentPage, onPageChange }) => {
    const [page, setPage] = useState(currentPage);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        onPageChange(newPage);
    };

    const getMiddlePages = (): (number | string)[] => {
        const pages: (number | string)[] = [];
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
                pages.push(i);
            }
        }
        if (page > 3) pages.splice(1, 0, '...');
        if (page < totalPages - 2) pages.splice(pages.length - 1, 0, '...');
        return pages;
    };

    return (
        <div className="flex justify-center items-center">
            <button
                className="px-4 py-2   text-gray-700 rounded-l"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
            >
                <span>{`<<`}</span>
            </button>
            {getMiddlePages().map((p, index) => (
                <button
                    key={index}
                    className={`px-4 py-2 ${p === page ? 'font-bold border-b border-blue-500 text-blue-500' : 'text-gray-700'}`}
                    onClick={() => p !== '...' && handlePageChange(p as number)}
                    disabled={p === '...'}
                >
                    {convertToFarsiDigits(`${p}`)}
                </button>
            ))}
            <button
                className="px-4 py-2   text-gray-700 rounded-r"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
            >
                <span>{`>>`}</span>
            </button>
        </div>
    );
};

export default Pagination;
