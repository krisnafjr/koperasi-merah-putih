export const pendiriQuery = `*[_type == "pendiri"]{
  _id,
  nama,
  jabatan,
  "foto": foto.asset->url
}`;
