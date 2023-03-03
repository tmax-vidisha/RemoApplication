
interface type{
    reviewDate:any;
    Date:any;
lastModifiedDateTime:any
}

const SortbyNewestFirst = (array:any) =>
  array.sort(function (a:any, b:any) {
    // @ts-ignore
    return new Date(a.reviewDate) - new Date(b.reviewDate);
  });
const SortbyOldestFirst = (array:any) =>
  array &&
  array.sort(function (a:any, b:any) {
     // @ts-ignore
    return new Date(b.reviewDate) - new Date(a.reviewDate);
  });
export { SortbyNewestFirst, SortbyOldestFirst };
