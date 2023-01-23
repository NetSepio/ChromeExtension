export const GET_SITE_REVIEWS = `
query MyQuery($url: String!) {
  reviewCreateds(where: {siteURL: $url}) {
    id
	  siteURL
    category
    siteType
    siteType
    siteTag
    siteSafety
    domainAddress
  }
}
`;

export const GET_THIS_USER_DATA = `
query MyQuery($id: ID!) {
  user(id: $id) {
    id
    roles
  }
}
`;
