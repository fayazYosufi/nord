'use client';
import React from 'react';
import Link from 'next/link';

interface sortFilterProps {
    isSort: boolean;
    sortText: string;
    isFilter: boolean;
    filterText: string;
    isSearch: boolean;
    searchPlaceholder: string;
    searchBtnText: string;
}

const SortFilterSearch: React.FC<sortFilterProps> = ({ isSort, sortText, isFilter, filterText, isSearch, searchPlaceholder, searchBtnText }) => {


    return (
        <div id='sortFilterSearch' className='dFlex mb_flexCol jcsb alic mb_aliFe ptb1 gap1' style={{ minHeight: '100px' }}>
            <div className='dFlex gap1  alic w60 jcsb'>
                <div>
                    {isSort != false && <div className='dFlex alic'>
                        <span>{sortText || 'sort by :'} </span>
                        <div className='input bgWhite'>
                            <select name="sortBy" id="sortBy" className='hover'>
                                <option value="az">AZ</option>
                                <option value="za">ZA</option>
                            </select>
                        </div>
                    </div>}
                </div>
                {isFilter != false && 
                // currentPage !='/career' &&
                <div className="dFlex gap1 alic flexEnd">
                    {filterText && <div>{filterText}</div>}
                    <div className="input bgWhite ">
                        {/* <div className=""> */}
                        <select name="filter" id="filter" className='hover'>
                            <option value="all">All</option>
                            <option value="all">Security</option>
                        </select>
                        {/* </div> */}
                    </div>
                </div>}
            </div>

            {isSearch != false &&
            <div className="w40 dFlex gap1 mb_flexCol">
                <div className=" input bgWhite wFill">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder={searchPlaceholder || `Search for service`} />
                </div>
                <button className="btn btnPrimary dNone mb_show wFill p1 m0">{searchBtnText || 'Search'}</button>
                <Link className='dNone mb_show center' href='#'>See everything {'>'}</Link>
            </div>}
        </div>
    )
}

export default SortFilterSearch