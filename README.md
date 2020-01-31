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
| Route | HTTP Verb	| POST body | Result Data | Description	 |
| --- | --- | --- | --- | --- |
| /login | `POST` | { 'email':'ezgidnlr@mail.com', 'password':'123456'} | ` Geriye dönen data personelin sayfaya giriş yapmasını sağlıyor. `|
