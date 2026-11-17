"use client";

import React from "react";
import { X, ShieldCheck } from "lucide-react";

export default function KvkkModal({
  isOpen,
  onClose,
  onAccept,
  domain = "jabravideokonferans.com",
  phone = "0850 850 08 55",
}: {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
  domain?: string;
  phone?: string;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 leading-tight">
                KVKK Aydınlatma Metni
              </h3>
              <p className="text-[11px] text-slate-500">
                TESCOM TELEKOMÜNİKASYON VE İLETİŞİM HİZ. SAN. TİC. LTD. ŞTİ.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-sm sm:text-base font-black text-slate-900 uppercase">
              TESCOM TELEKOMÜNİKASYON VE İLETİŞİM HİZ. SAN. TİC. LTD. ŞTİ.
            </h2>
            <p className="font-bold text-amber-700 text-xs sm:text-sm mt-0.5">
              KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN AYDINLATMA METNİ
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Son güncelleme: 03.11.2026 – Sürüm v1
            </p>
          </div>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">1. Veri Sorumlusu</h4>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;Kanun&quot;) uyarınca, <strong>{domain}</strong> internet sitesi üzerinden toplanan kişisel verileriniz, veri sorumlusu sıfatıyla Tescom Telekomünikasyon ve İletişim Hizmetleri Sanayi Ticaret Limited Şirketi (&quot;Tescom&quot;) tarafından aşağıda açıklanan kapsamda işlenmektedir.
            </p>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 text-[11px] sm:text-xs space-y-1 text-slate-600">
              <p><strong>Adres:</strong> Barbaros Hayrettin Paşa Mah. Şehitler Cad. Gümüş Residence No: 8 Daire: 323 Esenyurt / İSTANBUL</p>
              <p><strong>Telefon:</strong> {phone}</p>
              <p><strong>KEP:</strong> tescomtelekom@hs03.kep.tr</p>
              <p><strong>E-posta:</strong> destek@tescom.com.tr</p>
            </div>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">2. İşlenen Kişisel Veriler</h4>
            <ul className="list-disc pl-5 space-y-1 text-[11px] sm:text-xs">
              <li><strong>Kimlik ve iletişim:</strong> Ad soyad, kurumsal e-posta adresi, telefon numarası</li>
              <li><strong>Kurum bilgisi:</strong> Firma / kurum adı</li>
              <li><strong>Talep bilgisi:</strong> Talep türü, ilgilenilen ürün ve adetler, proje adı, mesaj içeriği</li>
              <li><strong>İşlem güvenliği:</strong> IP adresi, tarayıcı bilgisi (user-agent), işlem tarihi ve saati, bot doğrulama sonucu</li>
              <li><strong>Onay kayıtları:</strong> Aydınlatma metninin görüntülendiği ve varsa ticari ileti onayının verildiği tarih ve sürüm bilgisi</li>
            </ul>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">3. Kişisel Verilerin İşlenme Amaçları</h4>
            <p className="text-[11px] sm:text-xs">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc pl-5 space-y-1 text-[11px] sm:text-xs">
              <li>Bilgi, fiyat teklifi, proje kaydı ve demo taleplerinizin alınması, değerlendirilmesi ve size dönüş yapılması</li>
              <li>Satış öncesi ve satış sonrası teknik destek süreçlerinin yürütülmesi</li>
              <li>Talep ve teklif süreçlerinin kayıt altına alınması ve takibi</li>
              <li>İnternet sitesinin ve form altyapısının güvenliğinin sağlanması, otomatik (bot) ve kötü niyetli kullanımın engellenmesi</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi ve olası uyuşmazlıklarda delil olarak kullanılması</li>
              <li>Yalnızca ayrıca onay vermeniz halinde: Ürün, kampanya ve duyurular hakkında ticari elektronik ileti gönderilmesi</li>
            </ul>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">4. Toplama Yöntemi ve Hukuki Sebepler</h4>
            <p className="text-[11px] sm:text-xs">
              Kişisel verileriniz, internet sitemizdeki talep formu aracılığıyla elektronik ortamda, otomatik yollarla toplanmaktadır. Verileriniz Kanun&apos;un 5. maddesinin 2. fıkrasında yer alan;
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[11px] sm:text-xs">
              <li>(c) Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması kaydıyla sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması,</li>
              <li>(ç) Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,</li>
              <li>(e) Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması,</li>
              <li>(f) İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması</li>
            </ul>
            <p className="text-[11px] sm:text-xs">
              hukuki sebeplerine dayanılarak işlenmektedir. Ticari elektronik ileti gönderimi ise yalnızca 6563 sayılı Kanun kapsamında vereceğiniz onaya dayanır ve bu onay isteğe bağlıdır.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">5. Kişisel Verilerin Aktarılması</h4>
            <p className="text-[11px] sm:text-xs">
              Kişisel verileriniz yukarıdaki amaçlarla sınırlı olarak; talebinizin karşılanması için Tescom bünyesindeki yetkili satış ve teknik destek çalışanlarına, hizmet aldığımız e-posta altyapı sağlayıcısına (yurt içi), form güvenliği ve bot koruması amacıyla Cloudflare, Inc.&apos;e (ABD) yalnızca teknik doğrulama verisi (IP adresi, tarayıcı bilgisi), ve talep halinde yetkili kamu kurum ve kuruluşlarına aktarılabilecektir. Yurt dışına yapılan aktarımlar Kanun&apos;un 9. maddesinde öngörülen usul ve güvencelere uygun olarak gerçekleştirilir.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">6. Saklama Süresi</h4>
            <p className="text-[11px] sm:text-xs">
              Form aracılığıyla iletilen veriler, talebinizin sonuçlanmasından itibaren 2 (iki) yıl; ticari ilişki kurulması halinde ilgili mevzuatta öngörülen süreler boyunca saklanır. IP adresi ve tarayıcı bilgisi gibi işlem güvenliği verileri 1 (bir) yıl süreyle saklanır. Süre sonunda verileriniz silinir, yok edilir veya anonim hale getirilir. Verileriniz Tescom&apos;un Türkiye&apos;de bulunan sunucularında, erişimi yetkili personelle sınırlandırılmış şekilde tutulur.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">7. Çerezler</h4>
            <p className="text-[11px] sm:text-xs">
              <strong>{domain}</strong> ziyaretçi takibi veya reklam amaçlı çerez kullanmaz. Form güvenliği için Cloudflare Turnstile doğrulaması çalıştırılır; bu doğrulama yalnızca bot tespiti amacıyla kullanılır.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">8. Kanun&apos;un 11. Maddesi Kapsamındaki Haklarınız</h4>
            <p className="text-[11px] sm:text-xs">Veri sahibi olarak;</p>
            <ul className="list-disc pl-5 space-y-1 text-[11px] sm:text-xs">
              <li>a) Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
              <li>b) İşlenmişse buna ilişkin bilgi talep etme,</li>
              <li>c) İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>ç) Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
              <li>d) Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
              <li>e) Kanun&apos;un 7. maddesi çerçevesinde silinmesini veya yok edilmesini isteme,</li>
              <li>f) (d) ve (e) bentleri uyarınca yapılan işlemlerin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>ğ) Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
            </ul>
            <p className="text-[11px] sm:text-xs">haklarına sahipsiniz.</p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm">9. Başvuru Yöntemi</h4>
            <p className="text-[11px] sm:text-xs">
              Taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ&apos;e uygun olarak;
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[11px] sm:text-xs">
              <li>Yukarıdaki adrese ıslak imzalı dilekçe ile şahsen veya noter aracılığıyla,</li>
              <li><strong>tescomtelekom@hs03.kep.tr</strong> adresine kayıtlı elektronik posta ile güvenli elektronik imza veya mobil imza kullanarak,</li>
              <li>Daha önce Tescom&apos;a bildirdiğiniz ve sistemimizde kayıtlı bulunan e-posta adresinizden <strong>destek@tescom.com.tr</strong> adresine</li>
            </ul>
            <p className="text-[11px] sm:text-xs">
              iletebilirsiniz. Başvurularınız en geç 30 gün içinde ücretsiz olarak sonuçlandırılır. İşlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarife uygulanabilir.
            </p>
          </section>

          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 space-y-0.5">
            <p className="font-bold text-slate-800">TESCOM TELEKOMÜNİKASYON VE İLETİŞİM HİZ. SAN. TİC. LTD. ŞTİ.</p>
            <p>Adres: Barbaros Hayrettin Paşa Mah. Şehitler Cad. Gümüş Residence No: 8 Daire: 323 Esenyurt / İSTANBUL</p>
            <p>Tel: {phone} | KEP: tescomtelekom@hs03.kep.tr | E-posta: destek@tescom.com.tr</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-3.5 border-t border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            Kapat
          </button>
          {onAccept && (
            <button
              type="button"
              onClick={() => {
                onAccept();
                onClose();
              }}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-[#FFD100] text-slate-950 hover:bg-[#E6BC00] transition-colors shadow-sm"
            >
              Okudum, Anladım ve Kabul Ediyorum
            </button>
          )}
        </div>
      </div>
    </div>
  );
}