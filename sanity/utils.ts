import qs from "query-string";
interface createQueryParams {
  type: string;
  query: string;
  category: string;
  page?: number;
  perPage?: number;
}
export function createQuery(params: createQueryParams) {
  const { type, query, category, page = 1, perPage = 10 } = params;
  const conditions = [`*[_type=="${type}"`];
  if (query) conditions.push(`caption match "*${query}*"`);

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }

  //calculating pagination 1.25.00
  const offset = (page - 1) * perPage;
  const limit = perPage;
  return conditions.length > 1
    ? `${conditions[0]} && (${conditions
        .slice(1)
        .join(" && ")} )][${offset}...${limit}]`
    : `${conditions[0]}][${offset}...${limit}]`;
}

interface searchUrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToDelete?: string[];
}

export function searchUrlQuery({
  params,
  key,
  value,
  keysToDelete,
}: searchUrlQueryParams) {
  const presentUrl = qs.parse(params);
  if (keysToDelete) {
    keysToDelete.forEach((keyToDelete) => {
      delete presentUrl[keyToDelete];
    });
  } else if (key && value) {
    presentUrl[key] = value;
  }
  return qs.stringifyUrl(
    { url: window.location.pathname, query: presentUrl },
    { skipNull: true }
  );
}
