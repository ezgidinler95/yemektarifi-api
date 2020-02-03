# Yemek-tarifi API Service

`Yemek-Tarifi api servis dökümantasyonu`

### Kullanım

```
    > Anasayfa içerisinde yemek listesi görselle birlikte sıralanacaktır.
    > Herhangi yeni bir tarif eklenmek istendiğinde header üstündeki yemek ekle linkine basılmalıdır.
    > Kullanıcı adı ve şifre dogru girildiği takdirde yemek listesinin oldugu başka bir sayfaya yönlendirilecektir.
    > Yönlendirilen sayfada yeni tarif ekleme silme ve güncelleme işlemleri yapılabilmektedir..

```

# Login

| Route  | HTTP Verb | POST body                                           | Result Data                                                      | Description |
| ------ | --------- | --------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| /login | `POST`    | { 'email':'ezgidnlr@mail.com', 'password':'123456'} | `Geriye dönen data personelin sayfaya giriş yapmasını sağlıyor.` |

# Anayemekler

`Sisteme eklenen bütün tariflerin genelini kapsamaktadır. Sistem içerisinde bulunan anayemek endpoint dökümantasyon rotası aşşağıda belirtilmiştir.`

| Route            | HTTP Verb | Result Data                                        | Description                                                                                   |
| ---------------- | --------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| /ana-yemek/all   | `GET`     | `Type: Array, Data Description: Anayemek List`     | `Geriye dönen data Array tipinde veri tabanına eklenmiş tüm anayemeklerin listesi olacaktır.` |
| /ana-yemek/:\_id | `GET`     | `Type: Object, Data Description: Added Anayemek`   | `Geriye dönen data belitilen '_id' e sahip anayemek olacaktır.`                               |
| /ana-yemek       | `POST`    | `Type: Object, Data Description: Saved Anayemek`   | `Geriye dönen data eklenen anayemk olacaktır.`                                                |
| /ana-yemek       | `PUT`     | `Type: Object, Data Description: Updated Anayemek` | `Geriye dönen data belirtien '_id' e sahip anayemğin güncel hali olacaktır.`                  |
| /ana-yemek       | `DELETE`  | `Type: Object, Data Description: Deleted Anayemek` | `Geriye dönen data belirtilen '_id' e sahip anayemiğin silinen bilgileri olacaktır.`          |
