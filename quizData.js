const quizData = {
    "quiz": {
      "parts": [
        {
          "title": "Oily vs Dry (O/D)",
          "questions": [
            {
              "id": 1,
              "question": "Setelah mencuci wajah tanpa menggunakan moisturizer atau produk lainnya, bagaimana kondisi dahi dan pipi Anda setelah 2-3 jam?",
              "answers": [
                {"text": "Sangat kasar, mengelupas, atau terlihat abu-abu", "score": 1},
                {"text": "Terasa kencang", "score": 2},
                {"text": "Terhidrasi dengan baik tanpa pantulan cahaya", "score": 3},
                {"text": "Berminyak dengan pantulan cahaya terang", "score": 4}
              ]
            },
            {
              "id": 2,
              "question": "Dalam foto, wajah Anda terlihat berminyak:",
              "answers": [
                {"text": "Tidak pernah, atau tidak terlihat berminyak", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4}
              ]
            },
            {
              "id": 3,
              "question": "2-3 jam setelah memakai alas bedak tanpa bedak tambahan, riasan Anda terlihat:",
              "answers": [
                {"text": "Mengelupas atau menggumpal di kerutan", "score": 1},
                {"text": "Halus", "score": 2},
                {"text": "Berminyak", "score": 3},
                {"text": "Belang dan berminyak", "score": 4},
                {"text": "Saya tidak menggunakan alas bedak", "score": 2.5}
              ]
            },
            {
              "id": 4,
              "question": "Di lingkungan dengan kelembaban rendah tanpa moisturizer, kulit wajah Anda:",
              "answers": [
                {"text": "Terasa sangat kering atau retak", "score": 1},
                {"text": "Terasa kencang", "score": 2},
                {"text": "Terasa normal", "score": 3},
                {"text": "Terlihat berminyak, atau saya tidak pernah membutuhkan moisturizer", "score": 4},
                {"text": "Tidak tahu", "score": 2.5}
              ]
            },
            {
              "id": 5,
              "question": "Lihatlah di cermin dengan pembesaran. Berapa banyak pori-pori besar yang terlihat?",
              "answers": [
                {"text": "Tidak ada", "score": 1},
                {"text": "Beberapa di zona-T (dahi dan hidung)", "score": 2},
                {"text": "Banyak", "score": 3},
                {"text": "Sangat banyak", "score": 4},
                {"text": "Tidak tahu", "score": 2.5}
              ]
            },
            {
              "id": 6,
              "question": "Bagaimana Anda menggambarkan kulit wajah Anda?",
              "answers": [
                {"text": "Kering", "score": 1},
                {"text": "Normal", "score": 2},
                {"text": "Kombinasi (kering di beberapa bagian, berminyak di bagian lain)", "score": 3},
                {"text": "Berminyak", "score": 4}
              ]
            },
            {
              "id": 7,
              "question": "Ketika menggunakan sabun berbusa, kulit wajah Anda:",
              "answers": [
                {"text": "Terasa kering atau retak", "score": 1},
                {"text": "Sedikit kering tetapi tidak retak", "score": 2},
                {"text": "Terasa berminyak", "score": 3},
                {"text": "Saya tidak menggunakan sabun atau pembersih berbusa", "score": 2.5}
              ]
            },
            {
              "id": 8,
              "question": "Jika tidak menggunakan moisturizer, kulit wajah Anda terasa kencang:",
              "answers": [
                {"text": "Selalu", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Jarang", "score": 3},
                {"text": "Tidak pernah", "score": 4}
              ]
            },
            {
              "id": 9,
              "question": "Anda memiliki pori-pori tersumbat (komedo hitam atau putih):",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Jarang", "score": 2},
                {"text": "Kadang-kadang", "score": 3},
                {"text": "Selalu", "score": 4}
              ]
            },
            {
              "id": 10,
              "question": "Wajah Anda berminyak di zona-T (dahi dan hidung):",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4}
              ]
            },
            {
              "id": 11,
              "question": "2-3 jam setelah memakai moisturizer, pipi Anda:",
              "answers": [
                {"text": "Sangat kasar, mengelupas, atau terlihat abu-abu", "score": 1},
                {"text": "Halus", "score": 2},
                {"text": "Sedikit berminyak", "score": 3},
                {"text": "Berminyak dan licin, atau saya tidak menggunakan moisturizer", "score": 4}
              ]
            }
          ]          
        },
        
        {
          "title": "Sensitive vs Resistant (S/R)",
          "questions": [
            {
              "id": 1,
              "question": "Apakah Anda pernah mengalami benjolan merah (red bumps) di wajah?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Jarang", "score": 2},
                {"text": "Setidaknya sekali sebulan", "score": 3},
                {"text": "Setidaknya sekali seminggu", "score": 4}
              ]
            },
            {
              "id": 2,
              "question": "Produk perawatan kulit (termasuk cleanser, moisturizer, toner, dan makeup) membuat wajah Anda berjerawat, ruam, gatal, atau perih:",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Jarang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Saya tidak menggunakan produk di wajah", "score": 2.5}
              ]
            },
            {
              "id": 3,
              "question": "Apakah Anda pernah didiagnosis dengan acne (jerawat) atau rosacea?",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Teman dan kenalan saya bilang saya memilikinya", "score": 2},
                {"text": "Ya", "score": 3},
                {"text": "Ya, kasus yang parah", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 4,
              "question": "Jika Anda memakai perhiasan yang bukan emas 14 karat, seberapa sering Anda mengalami ruam?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Jarang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 5,
              "question": "Apakah sunscreen membuat kulit Anda gatal, perih, berjerawat, atau memerah?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Jarang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Saya tidak pernah memakai sunscreen", "score": 2.5}
              ]
            },
            {
              "id": 6,
              "question": "Apakah Anda pernah didiagnosis dengan atopic dermatitis, eczema, atau contact dermatitis (ruam alergi)?",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Teman saya mengatakan saya memilikinya", "score": 2},
                {"text": "Ya", "score": 3},
                {"text": "Ya, kasus yang parah", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 7,
              "question": "Seberapa sering Anda mengalami ruam di bawah cincin?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Jarang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Saya tidak memakai cincin", "score": 2.5}
              ]
            },
            {
              "id": 8,
              "question": "Produk seperti bubble bath beraroma, massage oil, atau body lotion membuat kulit Anda berjerawat, gatal, atau terasa kering:",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Jarang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Saya tidak pernah menggunakan produk ini", "score": 2.5}
              ]
            },
            {
              "id": 9,
              "question": "Apakah Anda bisa menggunakan sabun dari hotel di tubuh atau wajah Anda tanpa masalah?",
              "answers": [
                {"text": "Ya", "score": 1},
                {"text": "Sebagian besar waktu tidak ada masalah", "score": 2},
                {"text": "Tidak, kulit saya gatal, memerah, atau berjerawat", "score": 3},
                {"text": "Saya tidak akan menggunakannya karena terlalu banyak masalah di masa lalu", "score": 4},
                {"text": "Saya membawa sendiri, jadi tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 10,
              "question": "Apakah ada anggota keluarga Anda yang didiagnosis dengan atopic dermatitis, eczema, asma, dan/atau alergi?",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Satu anggota keluarga yang saya tahu", "score": 2},
                {"text": "Beberapa anggota keluarga", "score": 3},
                {"text": "Banyak anggota keluarga memiliki dermatitis, eczema, asma, dan/atau alergi", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 11,
              "question": "Apa yang terjadi jika Anda menggunakan detergen laundry beraroma atau pengendali statis di pengering pakaian?",
              "answers": [
                {"text": "Kulit saya baik-baik saja", "score": 1},
                {"text": "Kulit saya terasa sedikit kering", "score": 2},
                {"text": "Kulit saya gatal", "score": 3},
                {"text": "Kulit saya gatal dan terkena ruam", "score": 4},
                {"text": "Tidak yakin, atau saya belum pernah menggunakannya", "score": 2.5}
              ]
            },
            {
              "id": 12,
              "question": "Seberapa sering wajah dan/atau leher Anda memerah setelah olahraga sedang, dan/atau dengan stres atau emosi kuat seperti marah?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4}
              ]
            },
            {
              "id": 13,
              "question": "Seberapa sering Anda memerah setelah minum alkohol?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu, atau saya tidak minum karena masalah ini", "score": 4},
                {"text": "Saya tidak pernah minum alkohol", "score": 2.5}
              ]
            },
            {
              "id": 14,
              "question": "Seberapa sering Anda memerah setelah makan makanan atau minuman pedas atau panas?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Saya tidak pernah makan makanan pedas", "score": 2.5}
              ]
            },
            {
              "id": 15,
              "question": "Berapa banyak pembuluh darah merah atau biru yang terlihat (atau yang Anda miliki sebelum perawatan) di wajah atau hidung Anda?",
              "answers": [
                {"text": "Tidak ada", "score": 1},
                {"text": "Sedikit (satu hingga tiga di seluruh wajah, termasuk hidung)", "score": 2},
                {"text": "Beberapa (empat hingga enam di seluruh wajah, termasuk hidung)", "score": 3},
                {"text": "Banyak (lebih dari tujuh di seluruh wajah, termasuk hidung)", "score": 4}
              ]
            },
            {
              "id": 16,
              "question": "Wajah Anda terlihat merah dalam foto:",
              "answers": [
                {"text": "Tidak pernah, atau saya tidak pernah menyadarinya", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4}
              ]
            },
            {
              "id": 17,
              "question": "Orang bertanya apakah Anda terkena sunburn, bahkan ketika Anda tidak terkena?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4}
              ]
            },
            {
              "id": 18,
              "question": "Anda mengalami kemerahan, gatal, atau pembengkakan akibat makeup, sunscreen, atau produk perawatan kulit:",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Saya tidak menggunakan produk ini (jawab d jika Anda tidak menggunakan karena masalah ini)", "score": 4}
              ]
            },
            {
              "id": 19,
              "question": "apakah anda pernah menerima diagnosis jerawat (acne), rosacea, dermatitis kontak (contact dermatitis), atau eksim (eczema) dari seorang:",
              "answers": [
                {"text": "Dermatolog", "score": 5},
                {"text": "Dokter umum atau Dokter lain", "score": 2}
              ]
            }
          ]
        },

        {
          "title": "Pigmented vs non pigmented (P/N)",
          "questions": [
            {
              "id": 1,
              "question": "Setelah Anda memiliki jerawat atau rambut tumbuh ke dalam, apakah diikuti oleh bintik gelap kecokelatan atau hitam?",
              "answers": [
                {"text": "Tidak pernah", "score": 1},
                {"text": "Kadang-kadang", "score": 2},
                {"text": "Sering", "score": 3},
                {"text": "Selalu", "score": 4},
                {"text": "Saya tidak pernah memiliki jerawat atau rambut tumbuh ke dalam", "score": 2.5}
              ]
            },
            {
              "id": 2,
              "question": "Setelah Anda terluka, berapa lama bekas luka kecokelatan (bukan merah muda) bertahan?",
              "answers": [
                {"text": "Saya tidak mendapatkan bekas kecokelatan", "score": 1},
                {"text": "Seminggu", "score": 2},
                {"text": "Beberapa minggu", "score": 3},
                {"text": "Berbulan-bulan", "score": 4}
              ]
            },
            {
              "id": 3,
              "question": "Berapa banyak bintik gelap yang muncul di wajah Anda saat hamil, menggunakan pil KB, atau menjalani terapi hormon (HRT)?",
              "answers": [
                {"text": "Tidak ada", "score": 1},
                {"text": "Satu", "score": 2},
                {"text": "Beberapa", "score": 3},
                {"text": "Banyak", "score": 4},
                {"text": "Pertanyaan ini tidak relevan untuk saya", "score": 2.5}
              ]
            },
            {
              "id": 4,
              "question": "Apakah Anda memiliki bintik atau bercak gelap di bibir atas atau pipi Anda? Atau apakah Anda pernah memiliki dan sudah dihilangkan?",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Saya tidak yakin", "score": 2},
                {"text": "Ya, agak terlihat", "score": 3},
                {"text": "Ya, sangat terlihat", "score": 4}
              ]
            },
            {
              "id": 5,
              "question": "Apakah bintik gelap di wajah Anda memburuk ketika terkena sinar matahari?",
              "answers": [
                {"text": "Saya tidak memiliki bintik gelap", "score": 1},
                {"text": "Tidak yakin", "score": 2},
                {"text": "Sedikit lebih buruk", "score": 3},
                {"text": "Saya memakai tabir surya setiap hari dan tidak pernah terbakar", "score": 4}
              ]
            },
            {
              "id": 6,
              "question": "Apakah Anda pernah didiagnosis dengan melasma (bercak cokelat muda/gelap atau abu-abu di wajah)?",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Pernah, tapi sudah hilang", "score": 2},
                {"text": "Ya", "score": 3},
                {"text": "Ya, kasus yang parah", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 7,
              "question": "Apakah Anda memiliki atau pernah memiliki bintik cokelat kecil (freckles, sun spots) di wajah, dada, punggung, atau lengan?",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Ya, sedikit (1-5)", "score": 2},
                {"text": "Ya, banyak (6-15)", "score": 3},
                {"text": "Ya, sangat banyak (16+)", "score": 4}
              ]
            },
            {
              "id": 8,
              "question": "Ketika terkena sinar matahari untuk pertama kalinya setelah beberapa bulan, kulit Anda:",
              "answers": [
                {"text": "Hanya terbakar", "score": 1},
                {"text": "Terbakar, lalu menjadi lebih gelap", "score": 2},
                {"text": "Menjadi lebih gelap", "score": 3},
                {"text": "Kulit saya sudah gelap, jadi sulit untuk melihat perubahannya", "score": 4}
              ]
            },
            {
              "id": 9,
              "question": "Apa yang terjadi setelah Anda terkena sinar matahari selama beberapa hari berturut-turut?",
              "answers": [
                {"text": "Saya terbakar dan melepuh, tetapi kulit saya tidak berubah warna", "score": 1},
                {"text": "Kulit saya menjadi sedikit lebih gelap", "score": 2},
                {"text": "Kulit saya menjadi jauh lebih gelap", "score": 3},
                {"text": "Kulit saya sudah gelap, jadi sulit untuk melihat perubahannya", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 10,
              "question": "Ketika Anda pergi ke bawah sinar matahari, apakah Anda mengembangkan freckles (bintik kecil datar berukuran 1-2 mm)?",
              "answers": [
                {"text": "Tidak, saya tidak pernah memilikinya", "score": 1},
                {"text": "Saya mendapatkan beberapa freckles baru setiap tahun", "score": 2},
                {"text": "Saya sering mendapatkan freckles baru", "score": 3},
                {"text": "Kulit saya sudah gelap, jadi sulit untuk melihat freckles", "score": 4},
                {"text": "Saya tidak pernah pergi di bawah sinar matahari", "score": 2.5}
              ]
            },
            {
              "id": 11,
              "question": "Apakah salah satu orang tua Anda memiliki freckles? Jika ya, berapa jumlahnya? Jika hanya salah satu, jawab pertanyaan berdasarkan orang tua tersebut.",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Beberapa di wajah", "score": 2},
                {"text": "Banyak di wajah", "score": 3},
                {"text": "Banyak di wajah, dada, leher, dan bahu", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 12,
              "question": "Apa warna rambut alami Anda? (Jika sudah beruban, sebutkan warna sebelum beruban)",
              "answers": [
                {"text": "Pirang", "score": 1},
                {"text": "Cokelat", "score": 2},
                {"text": "Hitam", "score": 3},
                {"text": "Merah", "score": 4}
              ]
            },
            {
              "id": 13,
              "question": "Apakah Anda memiliki riwayat melanoma atau ada anggota keluarga Anda yang memilikinya?",
              "answers": [
                {"text": "Tidak", "score": 1},
                {"text": "Satu orang di keluarga saya", "score": 2},
                {"text": "Lebih dari satu orang di keluarga saya", "score": 3},
                {"text": "Saya memiliki riwayat melanoma", "score": 4},
                {"text": "Tidak yakin", "score": 2.5}
              ]
            },
            {
              "id": 14,
              "question": "Jika Anda memiliki bintik gelap pada kulit di area yang terkena sinar matahari, tambahkan 5 poin ke skor Anda.",
              "answers": [
                {"text": "N/A", "score": 5}
              ]
            }
          ]
        },

        {
          "title": "Wrinkled vs Tight (W/T)",
          "questions": [
            {
              "id": 1,
              "question": "Apakah Anda memiliki kerutan wajah?",
              "answers": [
                { "text": "Tidak, bahkan saat tersenyum, cemberut, atau mengangkat alis.", "score": 1 },
                { "text": "Hanya saat bergerak seperti tersenyum, cemberut, atau mengangkat alis.", "score": 2 },
                { "text": "Ya, saat bergerak dan beberapa saat istirahat tanpa gerakan.", "score": 3 },
                { "text": "Kerutan ada bahkan saat tidak tersenyum, cemberut, atau mengangkat alis.", "score": 4 }
              ]
            },
            {
              "id": 2,
              "question": "Berapa umur kulit wajah ibu Anda terlihat dibandingkan usianya?",
              "answers": [
                { "text": "5-10 tahun lebih muda.", "score": 1 },
                { "text": "Sesuai usianya.", "score": 2 },
                { "text": "5 tahun lebih tua.", "score": 3 },
                { "text": "Lebih dari 5 tahun lebih tua.", "score": 4 },
                { "text": "Tidak relevan; saya diadopsi atau tidak ingat.", "score": 2.5 }
              ]
            },
            {
              "id": 3,
              "question": "Berapa umur kulit wajah ayah Anda terlihat dibandingkan usianya?",
              "answers": [
                { "text": "5-10 tahun lebih muda.", "score": 1 },
                { "text": "Sesuai usianya.", "score": 2 },
                { "text": "5 tahun lebih tua.", "score": 3 },
                { "text": "Lebih dari 5 tahun lebih tua.", "score": 4 },
                { "text": "Tidak relevan; saya diadopsi atau tidak ingat.", "score": 2.5 }
              ]
            },
            {
              "id": 4,
              "question": "Berapa umur kulit wajah nenek dari pihak ibu Anda terlihat dibandingkan usianya?",
              "answers": [
                { "text": "5-10 tahun lebih muda.", "score": 1 },
                { "text": "Sesuai usianya.", "score": 2 },
                { "text": "5 tahun lebih tua.", "score": 3 },
                { "text": "Lebih dari 5 tahun lebih tua.", "score": 4 },
                { "text": "Tidak relevan; saya diadopsi, tidak pernah mengenalnya, atau tidak ingat.", "score": 2.5 }
              ]
            },
            {
              "id": 5,
              "question": "Berapa umur kulit wajah kakek dari pihak ibu Anda terlihat dibandingkan usianya?",
              "answers": [
                { "text": "5-10 tahun lebih muda.", "score": 1 },
                { "text": "Sesuai usianya.", "score": 2 },
                { "text": "5 tahun lebih tua.", "score": 3 },
                { "text": "Lebih dari 5 tahun lebih tua.", "score": 4 },
                { "text": "Tidak relevan; saya diadopsi, tidak pernah mengenalnya, atau tidak ingat.", "score": 2.5 }
              ]
            },
            {
              "id": 6,
              "question": "Berapa umur kulit wajah nenek dari pihak ayah Anda terlihat dibandingkan usianya?",
              "answers": [
                { "text": "5-10 tahun lebih muda.", "score": 1 },
                { "text": "Sesuai usianya.", "score": 2 },
                { "text": "5 tahun lebih tua.", "score": 3 },
                { "text": "Lebih dari 5 tahun lebih tua.", "score": 4 },
                { "text": "Tidak relevan; saya diadopsi, tidak pernah mengenalnya, atau tidak ingat.", "score": 2.5 }
              ]
            },
            {
              "id": 7,
              "question": "Berapa umur kulit wajah kakek dari pihak ayah Anda terlihat dibandingkan usianya?",
              "answers": [
                { "text": "5-10 tahun lebih muda.", "score": 1 },
                { "text": "Sesuai usianya.", "score": 2 },
                { "text": "5 tahun lebih tua.", "score": 3 },
                { "text": "Lebih dari 5 tahun lebih tua.", "score": 4 },
                { "text": "Tidak relevan; saya diadopsi, tidak pernah mengenalnya, atau tidak ingat.", "score": 2.5 }
              ]
            },
            {
              "id": 8,
              "question": "Apakah Anda pernah berjemur selama lebih dari dua minggu per tahun secara rutin?",
              "answers": [
                { "text": "Tidak pernah.", "score": 1 },
                { "text": "1-5 tahun.", "score": 2 },
                { "text": "5-10 tahun.", "score": 3 },
                { "text": "Lebih dari 10 tahun.", "score": 4 }
              ]
            },
            {
              "id": 9,
              "question": "Apakah Anda pernah berjemur musiman selama dua minggu atau kurang per tahun?",
              "answers": [
                { "text": "Tidak pernah.", "score": 1 },
                { "text": "1-5 tahun.", "score": 2 },
                { "text": "5-10 tahun.", "score": 3 },
                { "text": "Lebih dari 10 tahun.", "score": 4 }
              ]
            },
            {
              "id": 10,
              "question": "Berdasarkan tempat tinggal Anda, seberapa banyak paparan sinar matahari harian yang Anda terima sepanjang hidup Anda?",
              "answers": [
                { "text": "Sedikit (kebanyakan tinggal di tempat yang mendung).", "score": 1 },
                { "text": "Beberapa (tinggal di tempat kurang cerah dan juga cerah).", "score": 2 },
                { "text": "Sedang (tinggal di tempat dengan cukup banyak sinar matahari).", "score": 3 },
                { "text": "Banyak (tinggal di daerah tropis, selatan, atau sangat cerah).", "score": 4 }
              ]
            },
            {
              "id": 11,
              "question": "Menurut Anda, berapa umur penampilan Anda dibandingkan usia sebenarnya?",
              "answers": [
                { "text": "1-5 tahun lebih muda.", "score": 1 },
                { "text": "Sesuai usia.", "score": 2 },
                { "text": "5 tahun lebih tua.", "score": 3 },
                { "text": "Lebih dari 5 tahun lebih tua.", "score": 4 }
              ]
            },
            {
              "id": 12,
              "question": "Selama lima tahun terakhir, seberapa sering Anda membiarkan kulit Anda terbakar matahari secara sengaja atau tidak sengaja?",
              "answers": [
                { "text": "Tidak pernah.", "score": 1 },
                { "text": "Sekali sebulan.", "score": 2 },
                { "text": "Sekali seminggu.", "score": 3 },
                { "text": "Setiap hari.", "score": 4 }
              ]
            },
            {
              "id": 13,
              "question": "Seberapa sering Anda menggunakan tempat tidur penyamakan?",
              "answers": [
                { "text": "Tidak pernah.", "score": 1 },
                { "text": "1-5 kali.", "score": 2 },
                { "text": "5-10 kali.", "score": 3 },
                { "text": "Banyak kali.", "score": 4 }
              ]
            },
            {
              "id": 14,
              "question": "Berapa banyak rokok yang Anda hisap (atau terkena paparan)?",
              "answers": [
                { "text": "Tidak ada.", "score": 1 },
                { "text": "Beberapa bungkus.", "score": 2 },
                { "text": "Beberapa hingga banyak bungkus.", "score": 3 },
                { "text": "Saya merokok setiap hari.", "score": 4 },
                { "text": "Saya tidak pernah merokok tetapi pernah tinggal atau bekerja dengan perokok.", "score": 2.5 }
              ]
            },
            {
              "id": 15,
              "question": "Bagaimana kondisi kualitas udara di tempat Anda tinggal?",
              "answers": [
                { "text": "Segar dan bersih.", "score": 1 },
                { "text": "Bersih untuk sebagian tahun, tetapi tidak sepanjang tahun.", "score": 2 },
                { "text": "Sedikit tercemar.", "score": 3 },
                { "text": "Sangat tercemar.", "score": 4 }
              ]
            },
            {
              "id": 16,
              "question": "Berapa lama Anda telah menggunakan krim retinol wajah?",
              "answers": [
                { "text": "Bertahun-tahun.", "score": 1 },
                { "text": "Sesekali.", "score": 2 },
                { "text": "Pernah sekali untuk jerawat.", "score": 3 },
                { "text": "Tidak pernah.", "score": 4 }
              ]
            },
            {
              "id": 17,
              "question": "Seberapa sering Anda makan buah dan sayuran saat ini?",
              "answers": [
                { "text": "Di setiap makan.", "score": 1 },
                { "text": "Sekali sehari.", "score": 2 },
                { "text": "Sesekali.", "score": 3 },
                { "text": "Tidak pernah.", "score": 4 }
              ]
            },
            {
              "id": 18,
              "question": "Berapa persentase buah dan sayuran dalam diet harian Anda sepanjang hidup?",
              "answers": [
                { "text": "75-100%.", "score": 1 },
                { "text": "25-75%.", "score": 2 },
                { "text": "10-25%.", "score": 3 },
                { "text": "0-10%.", "score": 4 }
              ]
            },
            {
              "id": 19,
              "question": "Berapa persentase buah dan sayuran dalam diet harian Anda sepanjang hidup?",
              "answers": [
                { "text": "Gelap.", "score": 1 },
                { "text": "Sedang", "score": 2 },
                { "text": "Terang.", "score": 3 },
                { "text": "Sangat terang.", "score": 4 }
              ]
            },
            {
              "id": 20,
              "question": "Apa etnis Anda?",
              "answers": [
                { "text": "Afrika-Amerika/Karibia/Kulit Hitam.", "score": 1 },
                { "text": "Asia/India/Mediterrania/Lainnya.", "score": 2 },
                { "text": "Latin-Amerika/Hispanik.", "score": 3 },
                { "text": "Kaukasia", "score": 4 }
              ]
            },
            {
              "id": 21,
              "question": "Apakah anda berusia >25 tahun?",
              "answers": [
                { "text": "ya", "score": 5 },
                { "text": "tidak", "score": 0 }
              ]
            },
            
          ]
        }
      ]
    }
  };
  