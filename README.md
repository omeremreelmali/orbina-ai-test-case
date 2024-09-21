# Hava Durumu Uygulaması

Bu proje, Türkiye'deki şehirlerin hava durumu bilgilerini gösteren bir web uygulamasıdır. Kullanıcılar, API anahtarı ile giriş yaparak Türkiye'nin farklı şehirlerinin güncel hava durumu bilgilerini görüntüleyebilirler.

## Özellikler

- API anahtarı ile kullanıcı girişi
- Türkiye şehirlerinin hava durumu bilgilerini görüntüleme
- Şehir seçimi
- Güncel hava durumu verileri
- Responsive tasarım

## Teknolojiler

- Next.js
- React
- Redux Toolkit
- Axios
- React Hook Form
- Tailwind CSS
- Radix UI
- TypeScript

## Kullanılan API

Bu uygulama, OpenWeatherMap API'sini kullanmaktadır. Hava durumu verilerini almak için bu API'ye istekler gönderilmektedir. Uygulamayı kullanmak için bir OpenWeatherMap API anahtarı gerekmektedir.

API Dokümantasyonu: [OpenWeatherMap API Docs](https://openweathermap.org/api)


## Geliştirme Ortamında Çalıştırma

Projeyi geliştirme ortamında çalıştırmak için aşağıdaki adımları izleyin:

1. Repoyu klonlayın:
   ```
   git clone [https://github.com/your-username/weather-app.git](https://github.com/omeremreelmali/orbina-ai-test-case.git)
   ```

2. Proje dizinine gidin:
   ```
   cd orbina-ai-test-case
   ```

3. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

4. Geliştirme sunucusunu başlatın:
   ```
   npm run dev
   ```

5. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyin.

## Kullanım

1. Uygulamayı açın ve API anahtarınızı girerek giriş yapın.
2. Ana sayfada, varsayılan olarak İstanbul'un hava durumu bilgileri görüntülenecektir.
3. Şehir seçimi yaparak diğer şehirlerin hava durumu bilgilerini görüntüleyebilirsiniz.

## Katkıda Bulunma

1. Bu repoyu fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Dalınıza push yapın (`git push origin feature/AmazingFeature`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje [MIT lisansı](https://opensource.org/licenses/MIT) altında lisanslanmıştır.
