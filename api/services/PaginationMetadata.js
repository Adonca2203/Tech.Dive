class PaginationMetadata {
    TotalItemCount = 0;
    TotalPageCount = 0;
    PageSize = 0;
    CurrentPage = 0;
    constructor(totalItemCount, pageSize, currentPage) {
        this.TotalItemCount = totalItemCount;
        this.PageSize = pageSize;
        this.CurrentPage = currentPage;
        this.TotalPageCount = Math.ceil(totalItemCount / pageSize);
    }
}

export default PaginationMetadata;