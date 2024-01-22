import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { SampleDataResult } from './types';

const dummy = {
  body: {
    limit: 20,
    offset: 0,
    count: 20,
    total: 183,
    results: [
      {
        id: 'e69f27a3-03fa-48b7-a9b9-512d60110f04',
        version: 153,
        versionModifiedAt: '2023-12-13T14:05:34.550Z',
        lastMessageSequenceNumber: 60,
        createdAt: '2023-05-01T20:26:13.501Z',
        lastModifiedAt: '2023-12-13T14:05:34.550Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: 'dedf67a6-f66d-4baf-81b7-ea6ba36e748f' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: '5864c75e-ef9a-4547-8d79-aa0aa78a37ca',
        },
        masterData: {
          current: {
            name: {
              'de-DE': 'Indoor Jute Planter',
              'en-GB': 'Indoor Jute Planter',
              'es-MX': 'Jardinera de yute interior',
              'en-US': 'Indoor Jute Planter',
              'en-CA': 'Indoor Jute Planter',
            },
            description: {
              'de-DE':
                'Ein Indoor-Jute-Pflanzgefäß für Pflanzen ist eine dekorative und umweltfreundliche Möglichkeit, Grün in Ihrem Zuhause zu präsentieren. Das Pflanzgefäß besteht aus natürlichen Jutefasern, die zu einem robusten und atmungsaktiven Behälter für Ihre Pflanzen verwoben sind.\n\nDie neutrale Farbe der Jutefasern ergänzt die natürliche Farbe der Pflanzen und lässt sie schön zur Geltung kommen.\n\nDie Jutefasern des Pflanzgefäßes sind saugfähig und ermöglichen eine ordnungsgemäße Drainage und Luftzirkulation für die Pflanzenwurzeln. Dies trägt dazu bei, Wurzelfäule und andere bodenbürtige Krankheiten zu verhindern und ein gesundes Pflanzenwachstum zu gewährleisten.\n\nInsgesamt ist ein Jute-Pflanzgefäß für den Innenbereich eine charmante und praktische Möglichkeit, einen Hauch von Natur in Ihr Zuhause zu bringen und gleichzeitig den Planeten zu schonen.',
              'en-GB':
                '<p>An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants. The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully. The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth. Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.</p>',
              'es-MX':
                'Una jardinera de yute de interior para plantas es una forma decorativa y ecológica de exhibir vegetación en su hogar. La maceta está hecha de fibras de yute naturales tejidas en un recipiente resistente y transpirable para sus plantas.\n\nEl color neutro de las fibras de yute complementa el color natural de las plantas y las hace destacar maravillosamente.\n\nLas fibras de yute de la maceta son absorbentes y permiten un drenaje y una circulación de aire adecuados para las raíces de las plantas. Esto ayuda a prevenir la pudrición de las raíces y otras enfermedades transmitidas por el suelo y garantiza un crecimiento saludable de las plantas.\n\nEn general, una jardinera de yute de interior es una forma encantadora y práctica de aportar un toque de naturaleza a su hogar y al mismo tiempo proteger el planeta.',
              'en-US':
                '<p>An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants. The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully. The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth. Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to our planet.</p>',
              'en-CA':
                '<p>An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants. The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully. The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth. Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.</p>',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: '7b4fc048-68ab-4e12-be6a-c943a46e2d7c',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'indoor-jute-planter',
              'es-MX': 'macetero-de-yute-interior',
            },
            masterVariant: {
              id: 1,
              sku: 'IJP-01',
              key: 'key-IJP-01',
              prices: [
                {
                  id: '0227ea3c-086a-4734-bec5-3c30cc77dd3d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 4299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '39639658-5677-45f7-85e3-d3ad937022a3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 4599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '55e86b64-cda9-4096-9024-f1480d08b58f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 3999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '2b4da8d3-7a8e-4b24-a49b-76205e724080',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 4499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '057e2368-9f33-4015-a1fb-5d06f1ce1fea',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 20183,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Indoor_Jute_Planter-1.1.jpeg',
                  dimensions: { w: 5000, h: 5000 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Plant not included',
                    'en-US': '- Plant not included',
                    'de-DE': '- Plant not included',
                  },
                },
                {
                  name: 'size',
                  value: { 'en-GB': '10', 'en-US': 'Large', 'de-DE': '10' },
                },
                {
                  name: 'sizelabel',
                  value: {
                    'en-GB': 'Diameter',
                    'en-US': 'Diameter',
                    'de-DE': 'Diameter',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 92,
                version: 12,
                id: 'ee960783-ec04-44a9-80bd-06950c726278',
                channels: {
                  'b8b5417e-b339-42fc-a01e-2f917633f48d': {
                    isOnStock: true,
                    availableQuantity: 10,
                    version: 1,
                    id: '5db2b4c3-e61c-47c6-ba8b-d997064ba026',
                  },
                  '5b04e2fd-2de9-4988-8918-361eede3abd5': {
                    isOnStock: true,
                    availableQuantity: 20,
                    version: 1,
                    id: '58e3a1e3-8678-4788-bb6e-0966efc3e1c8',
                  },
                },
              },
            },
            variants: [
              {
                id: 2,
                sku: 'IJP-02',
                key: 'keyIJP-02',
                prices: [
                  {
                    id: '05a3268a-8550-42b8-8aa9-d0ecf65b4d79',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                  },
                  {
                    id: 'dd86f3ce-f729-461b-bfac-d2c89854bf4e',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'GBP',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                  },
                  {
                    id: 'b9ec13ac-f334-4a54-a70d-31b9221e3248',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 1999,
                      fractionDigits: 2,
                    },
                  },
                  {
                    id: 'ae59c1fa-7090-42b0-b1ee-cbfc0060c7a5',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'CAD',
                      centAmount: 2498,
                      fractionDigits: 2,
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Indoor_Jute_Planter-2.1.jpeg',
                    dimensions: { w: 5000, h: 5000 },
                  },
                ],
                attributes: [
                  {
                    name: 'productspec',
                    value: {
                      'en-GB': '- Plant not included',
                      'en-US': '- Plant not included',
                      'de-DE': '- Plant not included',
                    },
                  },
                  {
                    name: 'size',
                    value: { 'en-GB': '15', 'en-US': 'Small', 'de-DE': '15' },
                  },
                  {
                    name: 'sizelabel',
                    value: {
                      'en-GB': 'Diameter',
                      'en-US': 'Diameter',
                      'de-DE': 'Diameter',
                    },
                  },
                ],
                assets: [],
                availability: {
                  isOnStock: true,
                  availableQuantity: 100,
                  version: 1,
                  id: '5c9e3783-8c00-4e2e-9ac3-b864c561c0d4',
                },
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'de-DE': 'Indoor Jute Planter',
              'en-GB': 'Indoor Jute Planter',
              'es-MX': 'Jardinera de yute interior',
              'en-US': 'Indoor Jute Planter',
              'en-CA': 'Indoor Jute Planter',
            },
            description: {
              'de-DE':
                'Ein Indoor-Jute-Pflanzgefäß für Pflanzen ist eine dekorative und umweltfreundliche Möglichkeit, Grün in Ihrem Zuhause zu präsentieren. Das Pflanzgefäß besteht aus natürlichen Jutefasern, die zu einem robusten und atmungsaktiven Behälter für Ihre Pflanzen verwoben sind.\n\nDie neutrale Farbe der Jutefasern ergänzt die natürliche Farbe der Pflanzen und lässt sie schön zur Geltung kommen.\n\nDie Jutefasern des Pflanzgefäßes sind saugfähig und ermöglichen eine ordnungsgemäße Drainage und Luftzirkulation für die Pflanzenwurzeln. Dies trägt dazu bei, Wurzelfäule und andere bodenbürtige Krankheiten zu verhindern und ein gesundes Pflanzenwachstum zu gewährleisten.\n\nInsgesamt ist ein Jute-Pflanzgefäß für den Innenbereich eine charmante und praktische Möglichkeit, einen Hauch von Natur in Ihr Zuhause zu bringen und gleichzeitig den Planeten zu schonen.',
              'en-GB':
                '<p>An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants. The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully. The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth. Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.</p>',
              'es-MX':
                'Una jardinera de yute de interior para plantas es una forma decorativa y ecológica de exhibir vegetación en su hogar. La maceta está hecha de fibras de yute naturales tejidas en un recipiente resistente y transpirable para sus plantas.\n\nEl color neutro de las fibras de yute complementa el color natural de las plantas y las hace destacar maravillosamente.\n\nLas fibras de yute de la maceta son absorbentes y permiten un drenaje y una circulación de aire adecuados para las raíces de las plantas. Esto ayuda a prevenir la pudrición de las raíces y otras enfermedades transmitidas por el suelo y garantiza un crecimiento saludable de las plantas.\n\nEn general, una jardinera de yute de interior es una forma encantadora y práctica de aportar un toque de naturaleza a su hogar y al mismo tiempo proteger el planeta.',
              'en-US':
                '<p>An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants. The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully. The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth. Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to our planet.</p>',
              'en-CA':
                '<p>An indoor jute planter for plants is a decorative and eco-friendly way to display greenery in your home. The planter is made from natural jute fibers, which are woven into a sturdy and breathable container for your plants. The neutral color of the jute fibers complements the natural color of plants, making them stand out beautifully. The jute fibers of the planter are absorbent, allowing for proper drainage and air circulation for the plant roots. This helps to prevent root rot and other soil-borne diseases, ensuring healthy plant growth. Overall, an indoor jute planter is a charming and practical way to bring a touch of nature into your home, while also being kind to the planet.</p>',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: '7b4fc048-68ab-4e12-be6a-c943a46e2d7c',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'indoor-jute-planter',
              'es-MX': 'macetero-de-yute-interior',
            },
            masterVariant: {
              id: 1,
              sku: 'IJP-01',
              key: 'key-IJP-01',
              prices: [
                {
                  id: '0227ea3c-086a-4734-bec5-3c30cc77dd3d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 4299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '39639658-5677-45f7-85e3-d3ad937022a3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 4599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '55e86b64-cda9-4096-9024-f1480d08b58f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 3999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '2b4da8d3-7a8e-4b24-a49b-76205e724080',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 4499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '057e2368-9f33-4015-a1fb-5d06f1ce1fea',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 20183,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Indoor_Jute_Planter-1.1.jpeg',
                  dimensions: { w: 5000, h: 5000 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Plant not included',
                    'en-US': '- Plant not included',
                    'de-DE': '- Plant not included',
                  },
                },
                {
                  name: 'size',
                  value: { 'en-GB': '10', 'en-US': 'Large', 'de-DE': '10' },
                },
                {
                  name: 'sizelabel',
                  value: {
                    'en-GB': 'Diameter',
                    'en-US': 'Diameter',
                    'de-DE': 'Diameter',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 92,
                version: 12,
                id: 'ee960783-ec04-44a9-80bd-06950c726278',
                channels: {
                  'b8b5417e-b339-42fc-a01e-2f917633f48d': {
                    isOnStock: true,
                    availableQuantity: 10,
                    version: 1,
                    id: '5db2b4c3-e61c-47c6-ba8b-d997064ba026',
                  },
                  '5b04e2fd-2de9-4988-8918-361eede3abd5': {
                    isOnStock: true,
                    availableQuantity: 20,
                    version: 1,
                    id: '58e3a1e3-8678-4788-bb6e-0966efc3e1c8',
                  },
                },
              },
            },
            variants: [
              {
                id: 2,
                sku: 'IJP-02',
                key: 'keyIJP-02',
                prices: [
                  {
                    id: '05a3268a-8550-42b8-8aa9-d0ecf65b4d79',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                  },
                  {
                    id: 'dd86f3ce-f729-461b-bfac-d2c89854bf4e',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'GBP',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                  },
                  {
                    id: 'b9ec13ac-f334-4a54-a70d-31b9221e3248',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 1999,
                      fractionDigits: 2,
                    },
                  },
                  {
                    id: 'ae59c1fa-7090-42b0-b1ee-cbfc0060c7a5',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'CAD',
                      centAmount: 2498,
                      fractionDigits: 2,
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Indoor_Jute_Planter-2.1.jpeg',
                    dimensions: { w: 5000, h: 5000 },
                  },
                ],
                attributes: [
                  {
                    name: 'productspec',
                    value: {
                      'en-GB': '- Plant not included',
                      'en-US': '- Plant not included',
                      'de-DE': '- Plant not included',
                    },
                  },
                  {
                    name: 'size',
                    value: { 'en-GB': '15', 'en-US': 'Small', 'de-DE': '15' },
                  },
                  {
                    name: 'sizelabel',
                    value: {
                      'en-GB': 'Diameter',
                      'en-US': 'Diameter',
                      'de-DE': 'Diameter',
                    },
                  },
                ],
                assets: [],
                availability: {
                  isOnStock: true,
                  availableQuantity: 100,
                  version: 1,
                  id: '5c9e3783-8c00-4e2e-9ac3-b864c561c0d4',
                },
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'e69f27a3-03fa-48b7-a9b9-512d60110f04',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        priceMode: 'Embedded',
        lastVariantId: 4,
      },
      {
        id: 'd4bd390f-3a1c-4e9a-a6c9-9a48476a758a',
        version: 44,
        versionModifiedAt: '2023-10-26T17:21:47.525Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.155Z',
        lastModifiedAt: '2023-10-26T17:21:47.525Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Lana Pillow Cover',
              'en-CA': 'Lana Pillow Cover',
            },
            description: {
              'de-DE':
                'Ein Mikrofaser-Kissenbezug ist eine Art Textilbezug für ein Kissen, der aus synthetischen Fasern wie Polyester oder Nylon hergestellt wird. Mikrofaser ist bekannt für ihre Weichheit, Haltbarkeit und einfache Pflege.\n\nDer Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und kann in einer Vielzahl von Farben und Mustern erhältlich sein, um verschiedenen Einrichtungsstilen und Vorlieben gerecht zu werden.\n\nDas Mikrofasergewebe fühlt sich glatt und seidig an, ist sanft zur Haut und bietet eine angenehme Schlafoberfläche. Es ist außerdem atmungsaktiv und feuchtigkeitstransportierend, was hilft, die Körpertemperatur zu regulieren und eine Überhitzung während der Nacht zu verhindern.\n\nDer Kissenbezug wird oft wegen seiner praktischen und funktionalen Eigenschaften verwendet, wie z. B. seiner Pflegeleichtigkeit und Beständigkeit gegen Falten, Flecken und Ausbleichen. Es kann einfach in einer Maschine gewaschen und getrocknet werden, was es zu einer praktischen und pflegeleichten Option für vielbeschäftigte Haushalte macht.\n\nInsgesamt ist ein Mikrofaser-Kissenbezug ein vielseitiges und praktisches Accessoire, das den Komfort und die Haltbarkeit eines Kissens verbessern kann. Es kann sowohl zum täglichen Schlafen als auch zu dekorativen Zwecken in einer Vielzahl von Umgebungen wie Schlaf-, Gästezimmern und Wohnzimmern verwendet werden.',
              'en-GB':
                'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.\n\nThe pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.\n\nThe microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.\n\nThe pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.\n\nOverall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
              'es-MX':
                'Una funda de almohada de microfibra es un tipo de funda textil para almohada hecha de fibras sintéticas como poliéster o nailon. La microfibra es conocida por su suavidad, durabilidad y fácil mantenimiento.\n\nLa funda de almohada está diseñada para caber sobre una almohada de tamaño estándar, generalmente de alrededor de 18 pulgadas cuadradas. Tiene forma cuadrada y puede venir en una variedad de colores y patrones para adaptarse a diferentes estilos y preferencias de decoración.\n\nEl tejido de microfibra tiene un tacto suave y sedoso, agradable para la piel y proporciona una superficie cómoda para dormir. También es transpirable y absorbe la humedad, lo que ayuda a regular la temperatura corporal y evitar el sobrecalentamiento durante la noche.\n\nLa funda de almohada se utiliza a menudo por sus características prácticas y funcionales, como su fácil cuidado y su resistencia a las arrugas, las manchas y la decoloración. Se puede lavar y secar fácilmente en una máquina, lo que la convierte en una opción conveniente y de bajo mantenimiento para hogares ocupados.\n\nEn general, una funda de almohada de microfibra es un accesorio versátil y práctico que puede mejorar la comodidad y durabilidad de una almohada. Se puede utilizar para dormir todos los días, así como con fines decorativos en una variedad de entornos, como dormitorios, habitaciones de invitados y salas de estar.',
              'en-US':
                'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.\n\nThe pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.\n\nThe microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.\n\nThe pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.\n\nOverall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
              'en-CA':
                'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.\n\nThe pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.\n\nThe microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.\n\nThe pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.\n\nOverall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'f15a26d5-77d1-4a2d-a07b-64013eab64b0',
              },
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'lana-pillow-cover',
              'en-US': 'lana-pillow-cover',
              'de-DE': 'lana-kissenbezug',
              'es-MX': 'funda-de-almohada-lana',
            },
            masterVariant: {
              id: 1,
              sku: 'LPC-09',
              key: 'key-LPC-09',
              prices: [
                {
                  id: '421bacc7-69da-4edb-bf61-3073952cffa2',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '35a48b8b-f579-42e1-aec4-2276655c0bc7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'dc296a4c-4e5a-4e91-97b3-1b5f6078474a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c6b19db8-115a-4a94-9ec8-ae326511462b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1923,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a8396f57-f81b-4dcd-9f16-7cf3de402c2c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 18683,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Lana_Pillow_Cover-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Machine washable\n- Pillow not included\n- Has a zip enclosure',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '21fcade4-f94b-4385-ad2d-1aec00d8b025',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Lana Pillow Cover',
              'en-CA': 'Lana Pillow Cover',
            },
            description: {
              'de-DE':
                'Ein Mikrofaser-Kissenbezug ist eine Art Textilbezug für ein Kissen, der aus synthetischen Fasern wie Polyester oder Nylon hergestellt wird. Mikrofaser ist bekannt für ihre Weichheit, Haltbarkeit und einfache Pflege.\n\nDer Kissenbezug ist so konzipiert, dass er über ein Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Es hat eine quadratische Form und kann in einer Vielzahl von Farben und Mustern erhältlich sein, um verschiedenen Einrichtungsstilen und Vorlieben gerecht zu werden.\n\nDas Mikrofasergewebe fühlt sich glatt und seidig an, ist sanft zur Haut und bietet eine angenehme Schlafoberfläche. Es ist außerdem atmungsaktiv und feuchtigkeitstransportierend, was hilft, die Körpertemperatur zu regulieren und eine Überhitzung während der Nacht zu verhindern.\n\nDer Kissenbezug wird oft wegen seiner praktischen und funktionalen Eigenschaften verwendet, wie z. B. seiner Pflegeleichtigkeit und Beständigkeit gegen Falten, Flecken und Ausbleichen. Es kann einfach in einer Maschine gewaschen und getrocknet werden, was es zu einer praktischen und pflegeleichten Option für vielbeschäftigte Haushalte macht.\n\nInsgesamt ist ein Mikrofaser-Kissenbezug ein vielseitiges und praktisches Accessoire, das den Komfort und die Haltbarkeit eines Kissens verbessern kann. Es kann sowohl zum täglichen Schlafen als auch zu dekorativen Zwecken in einer Vielzahl von Umgebungen wie Schlaf-, Gästezimmern und Wohnzimmern verwendet werden.',
              'en-GB':
                'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.\n\nThe pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.\n\nThe microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.\n\nThe pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.\n\nOverall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
              'es-MX':
                'Una funda de almohada de microfibra es un tipo de funda textil para almohada hecha de fibras sintéticas como poliéster o nailon. La microfibra es conocida por su suavidad, durabilidad y fácil mantenimiento.\n\nLa funda de almohada está diseñada para caber sobre una almohada de tamaño estándar, generalmente de alrededor de 18 pulgadas cuadradas. Tiene forma cuadrada y puede venir en una variedad de colores y patrones para adaptarse a diferentes estilos y preferencias de decoración.\n\nEl tejido de microfibra tiene un tacto suave y sedoso, agradable para la piel y proporciona una superficie cómoda para dormir. También es transpirable y absorbe la humedad, lo que ayuda a regular la temperatura corporal y evitar el sobrecalentamiento durante la noche.\n\nLa funda de almohada se utiliza a menudo por sus características prácticas y funcionales, como su fácil cuidado y su resistencia a las arrugas, las manchas y la decoloración. Se puede lavar y secar fácilmente en una máquina, lo que la convierte en una opción conveniente y de bajo mantenimiento para hogares ocupados.\n\nEn general, una funda de almohada de microfibra es un accesorio versátil y práctico que puede mejorar la comodidad y durabilidad de una almohada. Se puede utilizar para dormir todos los días, así como con fines decorativos en una variedad de entornos, como dormitorios, habitaciones de invitados y salas de estar.',
              'en-US':
                'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.\n\nThe pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.\n\nThe microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.\n\nThe pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.\n\nOverall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
              'en-CA':
                'A microfiber pillow cover is a type of textile covering for a pillow that is made from synthetic fibers such as polyester or nylon. Microfiber is known for its softness, durability, and easy maintenance.\n\nThe pillow cover is designed to fit over a standard size pillow, usually around 18 inches square. It features a square shape and can come in a variety of colors and patterns to suit different decor styles and preferences.\n\nThe microfiber fabric has a smooth and silky feel that is gentle on the skin and provides a comfortable surface for sleeping. It is also breathable and moisture-wicking, which helps to regulate body temperature and prevent overheating during the night.\n\nThe pillow cover is often used for its practical and functional features, such as its easy care and resistance to wrinkles, stains, and fading. It can be easily washed and dried in a machine, making it a convenient and low-maintenance option for busy households.\n\nOverall, a microfiber pillow cover is a versatile and practical accessory that can enhance the comfort and durability of a pillow. It can be used for everyday sleeping, as well as for decorative purposes in a variety of settings, such as bedrooms, guest rooms, and living rooms.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'f15a26d5-77d1-4a2d-a07b-64013eab64b0',
              },
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'lana-pillow-cover',
              'en-US': 'lana-pillow-cover',
              'de-DE': 'lana-kissenbezug',
              'es-MX': 'funda-de-almohada-lana',
            },
            masterVariant: {
              id: 1,
              sku: 'LPC-09',
              key: 'key-LPC-09',
              prices: [
                {
                  id: '421bacc7-69da-4edb-bf61-3073952cffa2',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '35a48b8b-f579-42e1-aec4-2276655c0bc7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'dc296a4c-4e5a-4e91-97b3-1b5f6078474a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c6b19db8-115a-4a94-9ec8-ae326511462b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1923,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a8396f57-f81b-4dcd-9f16-7cf3de402c2c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 18683,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Lana_Pillow_Cover-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Machine washable\n- Pillow not included\n- Has a zip enclosure',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '21fcade4-f94b-4385-ad2d-1aec00d8b025',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'd4bd390f-3a1c-4e9a-a6c9-9a48476a758a',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: 'e317cd73-928b-4854-a760-3f105929129c',
        version: 47,
        versionModifiedAt: '2023-10-26T17:21:47.514Z',
        lastMessageSequenceNumber: 20,
        createdAt: '2023-05-01T20:26:52.156Z',
        lastModifiedAt: '2023-10-26T17:21:47.514Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Wine Bottle Opener',
              'en-CA': 'Wine Bottle Opener',
            },
            description: {
              'de-DE':
                'Ein Weinflaschenöffner ist ein Gerät, mit dem der Korken aus einer Weinflasche entfernt wird. Dieser Öffner verfügt über eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gezogen wird. Weitere Features sind ein Flaschenöffner. Dieser Weinflaschenöffner ist im Hebelstil.',
              'en-GB':
                'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
              'es-MX':
                'Un abridor de botellas de vino es un dispositivo que se utiliza para quitar el corcho de una botella de vino. Este abridor cuenta con un tornillo helicoidal puntiagudo que se enrosca en el corcho y un mango o palanca que se utiliza para sacar el corcho de la botella. Las características adicionales incluyen un abridor de botellas. Este abridor de botellas de vino tiene forma de palanca.',
              'en-US':
                'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
              'en-CA':
                'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
            },
            categories: [
              {
                typeId: 'category',
                id: '1690b904-a72f-41f7-aa45-97e6168349f2',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'wine-bottle-opener',
              'en-US': 'wine-bottle-opener',
              'de-DE': 'wein-flaschenffner',
              'es-MX': 'abridor-de-botellas-de-vino',
            },
            masterVariant: {
              id: 1,
              sku: 'WOP-09',
              key: 'key-WOP-09',
              prices: [
                {
                  id: 'b2960637-9118-4c0e-9106-ebfd3280a89f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '6dde01f8-14fb-43c2-89a7-a86645722f47',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'cab58b68-4204-4e2e-aeb6-148c03b73e72',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'b3eb239f-242b-4080-abb4-c7ec944a03c8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 348,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '58b0ab9d-0143-4bc5-8adc-da1303b084c7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 3383,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wine_Bottle_Opener-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Stainless steel' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 99,
                version: 4,
                id: 'e59d3d64-d3a4-4fec-8b79-5cf632bf7ff3',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Wine Bottle Opener',
              'en-CA': 'Wine Bottle Opener',
            },
            description: {
              'de-DE':
                'Ein Weinflaschenöffner ist ein Gerät, mit dem der Korken aus einer Weinflasche entfernt wird. Dieser Öffner verfügt über eine spitze Spiralschraube, die in den Korken gedreht wird, und einen Griff oder Hebel, mit dem der Korken aus der Flasche gezogen wird. Weitere Features sind ein Flaschenöffner. Dieser Weinflaschenöffner ist im Hebelstil.',
              'en-GB':
                'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
              'es-MX':
                'Un abridor de botellas de vino es un dispositivo que se utiliza para quitar el corcho de una botella de vino. Este abridor cuenta con un tornillo helicoidal puntiagudo que se enrosca en el corcho y un mango o palanca que se utiliza para sacar el corcho de la botella. Las características adicionales incluyen un abridor de botellas. Este abridor de botellas de vino tiene forma de palanca.',
              'en-US':
                'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
              'en-CA':
                'A wine bottle opener is a device used to remove the cork from a wine bottle. This opener features a pointed helix screw that is twisted into the cork, and a handle or lever that is used to pull the cork out of the bottle. Additional features include a bottle opener. This wine bottle opener is lever-style.',
            },
            categories: [
              {
                typeId: 'category',
                id: '1690b904-a72f-41f7-aa45-97e6168349f2',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'wine-bottle-opener',
              'en-US': 'wine-bottle-opener',
              'de-DE': 'wein-flaschenffner',
              'es-MX': 'abridor-de-botellas-de-vino',
            },
            masterVariant: {
              id: 1,
              sku: 'WOP-09',
              key: 'key-WOP-09',
              prices: [
                {
                  id: 'b2960637-9118-4c0e-9106-ebfd3280a89f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '6dde01f8-14fb-43c2-89a7-a86645722f47',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'cab58b68-4204-4e2e-aeb6-148c03b73e72',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'b3eb239f-242b-4080-abb4-c7ec944a03c8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 348,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '58b0ab9d-0143-4bc5-8adc-da1303b084c7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 3383,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wine_Bottle_Opener-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Stainless steel' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 99,
                version: 4,
                id: 'e59d3d64-d3a4-4fec-8b79-5cf632bf7ff3',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'e317cd73-928b-4854-a760-3f105929129c',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '350493e1-64be-40f9-81ae-88fb35c9eded',
        version: 50,
        versionModifiedAt: '2023-11-15T01:25:36.470Z',
        lastMessageSequenceNumber: 22,
        createdAt: '2023-05-01T20:26:52.161Z',
        lastModifiedAt: '2023-11-15T01:25:36.470Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: 'f372e4e3-4a11-469d-807a-d3622d00da99' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: { 'en-US': 'Vanilla Candle', 'en-CA': 'Vanilla Candle' },
            description: {
              'de-DE':
                'Eine Vanillekerze ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichen und cremigen Vanilleduft durchtränkt ist.\n\nDie Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht.\n\nWenn die Kerze angezündet wird, verströmt sie ein beruhigendes und beruhigendes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für eine gemütliche Nacht oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnzimmer zu schaffen.\n\nEine Vanillekerze ist eine klassische und beruhigende Wahl, um jedem Zuhause einen Hauch von Wärme und Gemütlichkeit zu verleihen. Sein süßes und beruhigendes Aroma kann dazu beitragen, eine entspannte und einladende Atmosphäre zu schaffen, was es zu einer beliebten Wahl für den Einsatz in Schlafzimmern, Wohnzimmern und Badezimmern macht.',
              'en-GB':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
              'es-MX':
                'Una vela de vainilla es una opción popular y atemporal para agregar una atmósfera cálida y acogedora a cualquier hogar. La vela está hecha de cera de alta calidad, a la que se le ha añadido el rico y cremoso aroma de la vainilla.\n\nLa vela se presenta en un recipiente de cristal, lo que ayuda a proteger la llama y además aporta un toque decorativo a la vela.\n\nCuando se enciende, la vela liberará un aroma calmante y reconfortante, llenando la habitación con el dulce y reconfortante aroma de la vainilla. La fragancia a menudo se asocia con calidez, comodidad y relajación, lo que la hace perfecta para usar durante una noche acogedora o para crear una atmósfera relajante en un dormitorio o sala de estar.\n\nUna vela de vainilla es una opción clásica y reconfortante para añadir un toque de calidez y comodidad a cualquier hogar. Su aroma dulce y relajante puede ayudar a crear un ambiente relajado y acogedor, lo que lo convierte en una opción popular para su uso en dormitorios, salas de estar y baños.',
              'en-US':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
              'en-CA':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
            ],
            categoryOrderHints: {},
            slug: { 'en-US': 'vanilla-candle', 'es-MX': 'vela-de-vainilla' },
            metaDescription: {
              'en-GB':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
              'de-DE':
                'Eine Vanillekerze ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichen und cremigen Vanilleduft durchtränkt ist.\n\nDie Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht.\n\nWenn die Kerze angezündet wird, verströmt sie ein beruhigendes und beruhigendes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für eine gemütliche Nacht oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnzimmer zu schaffen.\n\nEine Vanillekerze ist eine klassische und beruhigende Wahl, um jedem Zuhause einen Hauch von Wärme und Gemütlichkeit zu verleihen. Sein süßes und beruhigendes Aroma kann dazu beitragen, eine entspannte und einladende Atmosphäre zu schaffen, was es zu einer beliebten Wahl für den Einsatz in Schlafzimmern, Wohnzimmern und Badezimmern macht.',
              'en-US':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
            },
            masterVariant: {
              id: 1,
              sku: 'VC-01',
              key: 'key-VC-01',
              prices: [
                {
                  id: '8e184304-5a1b-4476-9a23-2e8ef1656164',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'aa607bf3-74c1-48da-8d95-92ce66400f4b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '4ceb63a1-a769-44c4-b092-8162fd446db1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '5807b0e2-08cc-4e30-a208-2aba5a578204',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1748,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '749fdf31-7c02-4e64-a1cc-714d9c53c68d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 16983,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Vanilla_Candle-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Vanilla_Candle-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Comes in glass jar\n- 300 grams',
                    'en-US': '- Comes in glass jar\n- 300 grams',
                    'de-DE': '- Comes in glass jar\n- 300 grams',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 98,
                version: 1,
                id: '43bbda90-2dce-4a20-97cb-8fd7174a8d98',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: { 'en-US': 'Vanilla Candle', 'en-CA': 'Vanilla Candle' },
            description: {
              'de-DE':
                'Eine Vanillekerze ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichen und cremigen Vanilleduft durchtränkt ist.\n\nDie Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht.\n\nWenn die Kerze angezündet wird, verströmt sie ein beruhigendes und beruhigendes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für eine gemütliche Nacht oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnzimmer zu schaffen.\n\nEine Vanillekerze ist eine klassische und beruhigende Wahl, um jedem Zuhause einen Hauch von Wärme und Gemütlichkeit zu verleihen. Sein süßes und beruhigendes Aroma kann dazu beitragen, eine entspannte und einladende Atmosphäre zu schaffen, was es zu einer beliebten Wahl für den Einsatz in Schlafzimmern, Wohnzimmern und Badezimmern macht.',
              'en-GB':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
              'es-MX':
                'Una vela de vainilla es una opción popular y atemporal para agregar una atmósfera cálida y acogedora a cualquier hogar. La vela está hecha de cera de alta calidad, a la que se le ha añadido el rico y cremoso aroma de la vainilla.\n\nLa vela se presenta en un recipiente de cristal, lo que ayuda a proteger la llama y además aporta un toque decorativo a la vela.\n\nCuando se enciende, la vela liberará un aroma calmante y reconfortante, llenando la habitación con el dulce y reconfortante aroma de la vainilla. La fragancia a menudo se asocia con calidez, comodidad y relajación, lo que la hace perfecta para usar durante una noche acogedora o para crear una atmósfera relajante en un dormitorio o sala de estar.\n\nUna vela de vainilla es una opción clásica y reconfortante para añadir un toque de calidez y comodidad a cualquier hogar. Su aroma dulce y relajante puede ayudar a crear un ambiente relajado y acogedor, lo que lo convierte en una opción popular para su uso en dormitorios, salas de estar y baños.',
              'en-US':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
              'en-CA':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
            ],
            categoryOrderHints: {},
            slug: { 'en-US': 'vanilla-candle', 'es-MX': 'vela-de-vainilla' },
            metaDescription: {
              'en-GB':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
              'de-DE':
                'Eine Vanillekerze ist eine beliebte und zeitlose Wahl, um jedem Zuhause eine warme und einladende Atmosphäre zu verleihen. Die Kerze besteht aus hochwertigem Wachs, das mit dem reichen und cremigen Vanilleduft durchtränkt ist.\n\nDie Kerze wird in einem Glasbehälter präsentiert, der zum Schutz der Flamme beiträgt und der Kerze auch eine dekorative Note verleiht.\n\nWenn die Kerze angezündet wird, verströmt sie ein beruhigendes und beruhigendes Aroma und erfüllt den Raum mit dem süßen und beruhigenden Duft von Vanille. Der Duft wird oft mit Wärme, Gemütlichkeit und Entspannung in Verbindung gebracht und eignet sich daher perfekt für eine gemütliche Nacht oder um eine beruhigende Atmosphäre in einem Schlaf- oder Wohnzimmer zu schaffen.\n\nEine Vanillekerze ist eine klassische und beruhigende Wahl, um jedem Zuhause einen Hauch von Wärme und Gemütlichkeit zu verleihen. Sein süßes und beruhigendes Aroma kann dazu beitragen, eine entspannte und einladende Atmosphäre zu schaffen, was es zu einer beliebten Wahl für den Einsatz in Schlafzimmern, Wohnzimmern und Badezimmern macht.',
              'en-US':
                'A vanilla candle is a popular and timeless choice for adding a warm and inviting atmosphere to any home. The candle is made from high-quality wax, which is infused with the rich and creamy fragrance of vanilla.\n\nThe candle is presented in a glass container, which helps to protect the flame and also adds a decorative touch to the candle.\n\nWhen lit, the candle will release a soothing and comforting aroma, filling the room with the sweet and comforting scent of vanilla. The fragrance is often associated with warmth, coziness, and relaxation, making it perfect for use during a cozy night in or for creating a calming atmosphere in a bedroom or living room.\n\nA vanilla candle is a classic and comforting choice for adding a touch of warmth and coziness to any home. Its sweet and soothing aroma can help to create a relaxed and welcoming atmosphere, making it a popular choice for use in bedrooms, living rooms, and bathrooms.',
            },
            masterVariant: {
              id: 1,
              sku: 'VC-01',
              key: 'key-VC-01',
              prices: [
                {
                  id: '8e184304-5a1b-4476-9a23-2e8ef1656164',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'aa607bf3-74c1-48da-8d95-92ce66400f4b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '4ceb63a1-a769-44c4-b092-8162fd446db1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '5807b0e2-08cc-4e30-a208-2aba5a578204',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1748,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '749fdf31-7c02-4e64-a1cc-714d9c53c68d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 16983,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Vanilla_Candle-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Vanilla_Candle-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Comes in glass jar\n- 300 grams',
                    'en-US': '- Comes in glass jar\n- 300 grams',
                    'de-DE': '- Comes in glass jar\n- 300 grams',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 98,
                version: 1,
                id: '43bbda90-2dce-4a20-97cb-8fd7174a8d98',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '350493e1-64be-40f9-81ae-88fb35c9eded',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: 'c61b6475-1b0f-4a3c-9a45-c64be540d8fa',
        version: 70,
        versionModifiedAt: '2023-10-26T17:21:47.743Z',
        lastMessageSequenceNumber: 32,
        createdAt: '2023-05-01T20:26:52.171Z',
        lastModifiedAt: '2023-10-26T17:21:47.743Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: { 'en-US': 'Charcoal Chair', 'en-CA': 'Charcoal Chair' },
            description: {
              'de-DE':
                'Dieser Stuhl mit Lederbezug verfügt über einen stabilen Rahmen und Beine. Sitzfläche und Rückenlehne sind mit hochwertigem Leder bezogen, das je nach Ausführung glatt oder strukturiert sein kann. Das Leder wird straff über eine Polsterschicht gespannt, um der auf dem Stuhl sitzenden Person Komfort und Halt zu bieten.\n\nDer Stuhl hat eine hohe Rückenlehne, was ihn ideal für das Esszimmer oder ein Arbeitszimmer macht.\n\nInsgesamt ist ein Stuhl mit Lederpolsterung typischerweise elegant und modern im Design und bietet eine komfortable und stilvolle Sitzgelegenheit für jeden Raum.',
              'en-GB':
                'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.\n\nThe chair has a high backrest making it ideal for the dining room or a study room.\n\nOverall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
              'es-MX':
                'Esta silla con tapizado de cuero presenta una estructura y patas resistentes. El asiento y el respaldo están tapizados en piel de alta calidad, que según el diseño puede ser lisa o texturizada. El cuero se estira sobre una capa de acolchado para brindar comodidad y apoyo a la persona sentada en la silla.\n\nLa silla tiene un respaldo alto, por lo que es ideal para el comedor o la sala de estudio.\n\nEn general, una silla con tapizado de cuero suele tener un diseño elegante y moderno, y proporciona una opción de asiento cómoda y elegante para cualquier habitación.',
              'en-US':
                'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.\n\nThe chair has a high backrest making it ideal for the dining room or a study room.\n\nOverall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
              'en-CA':
                'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.\n\nThe chair has a high backrest making it ideal for the dining room or a study room.\n\nOverall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
            },
            categories: [
              {
                typeId: 'category',
                id: '776c30f5-87a5-4ca0-b759-41b72155fba9',
              },
              {
                typeId: 'category',
                id: 'ec727120-b702-4284-bb10-94027ac7844a',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'charcoal-chair',
              'en-US': 'charcoal-chair',
              'de-DE': 'holzkohle-stuhl',
              'es-MX': 'silla-de-carbn',
            },
            masterVariant: {
              id: 1,
              sku: 'CCH-093',
              key: 'key-CCH-093',
              prices: [
                {
                  id: 'e5b82db6-88c2-40ca-8143-8b0a93412aae',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 9900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'db8dacd9-0071-493f-a295-3c316bfb46c8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 9900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '53ab96e0-efda-4e60-9654-df790137c41c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 9900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '359bf48c-b63c-4021-9cb0-375a53aa77b0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 7900,
                    fractionDigits: 2,
                  },
                  customerGroup: {
                    typeId: 'customer-group',
                    id: '94ed8367-5775-4871-bb5c-1ff84cfb7183',
                  },
                },
                {
                  id: 'db6eeda3-4de2-45ce-9c4b-9517df9d76dc',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 8900,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '03597822-d63c-4d23-ba0f-56780a87d3f3',
                  },
                },
                {
                  id: 'd4f8061b-cccf-46e0-9eb5-0c65c9fdae2d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 10400,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '5b04e2fd-2de9-4988-8918-361eede3abd5',
                  },
                },
                {
                  id: 'bd1095d2-b63a-4b79-a751-42355860261f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 17325,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'f52019a5-fac8-4745-b709-3fab893cbb90',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 168300,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '7f702031-6a8f-46ba-8400-1aa7d1434afd',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 134300,
                    fractionDigits: 2,
                  },
                  customerGroup: {
                    typeId: 'customer-group',
                    id: '94ed8367-5775-4871-bb5c-1ff84cfb7183',
                  },
                },
                {
                  id: 'd0347fb7-b860-4159-ad0c-913c32f7504d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 151300,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '03597822-d63c-4d23-ba0f-56780a87d3f3',
                  },
                },
                {
                  id: '5eb971a9-0f2a-440c-ad3f-de32593fc43f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 176800,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '5b04e2fd-2de9-4988-8918-361eede3abd5',
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Includes 1 chair' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '498c03dc-9c6d-4409-b8c5-6c3edd5a7a22',
                channels: {
                  'b8b5417e-b339-42fc-a01e-2f917633f48d': {
                    isOnStock: true,
                    availableQuantity: 25,
                    version: 1,
                    id: '3ab4f3f1-e493-4a0d-9b1d-1f0bb5efa8f4',
                  },
                  '03597822-d63c-4d23-ba0f-56780a87d3f3': {
                    isOnStock: true,
                    availableQuantity: 20,
                    version: 1,
                    id: 'a564db07-6e48-48b4-975b-cbf4e57b8894',
                  },
                },
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: { 'en-US': 'Charcoal Chair', 'en-CA': 'Charcoal Chair' },
            description: {
              'de-DE':
                'Dieser Stuhl mit Lederbezug verfügt über einen stabilen Rahmen und Beine. Sitzfläche und Rückenlehne sind mit hochwertigem Leder bezogen, das je nach Ausführung glatt oder strukturiert sein kann. Das Leder wird straff über eine Polsterschicht gespannt, um der auf dem Stuhl sitzenden Person Komfort und Halt zu bieten.\n\nDer Stuhl hat eine hohe Rückenlehne, was ihn ideal für das Esszimmer oder ein Arbeitszimmer macht.\n\nInsgesamt ist ein Stuhl mit Lederpolsterung typischerweise elegant und modern im Design und bietet eine komfortable und stilvolle Sitzgelegenheit für jeden Raum.',
              'en-GB':
                'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.\n\nThe chair has a high backrest making it ideal for the dining room or a study room.\n\nOverall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
              'es-MX':
                'Esta silla con tapizado de cuero presenta una estructura y patas resistentes. El asiento y el respaldo están tapizados en piel de alta calidad, que según el diseño puede ser lisa o texturizada. El cuero se estira sobre una capa de acolchado para brindar comodidad y apoyo a la persona sentada en la silla.\n\nLa silla tiene un respaldo alto, por lo que es ideal para el comedor o la sala de estudio.\n\nEn general, una silla con tapizado de cuero suele tener un diseño elegante y moderno, y proporciona una opción de asiento cómoda y elegante para cualquier habitación.',
              'en-US':
                'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.\n\nThe chair has a high backrest making it ideal for the dining room or a study room.\n\nOverall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
              'en-CA':
                'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.\n\nThe chair has a high backrest making it ideal for the dining room or a study room.\n\nOverall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
            },
            categories: [
              {
                typeId: 'category',
                id: '776c30f5-87a5-4ca0-b759-41b72155fba9',
              },
              {
                typeId: 'category',
                id: 'ec727120-b702-4284-bb10-94027ac7844a',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'charcoal-chair',
              'en-US': 'charcoal-chair',
              'de-DE': 'holzkohle-stuhl',
              'es-MX': 'silla-de-carbn',
            },
            masterVariant: {
              id: 1,
              sku: 'CCH-093',
              key: 'key-CCH-093',
              prices: [
                {
                  id: 'e5b82db6-88c2-40ca-8143-8b0a93412aae',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 9900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'db8dacd9-0071-493f-a295-3c316bfb46c8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 9900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '53ab96e0-efda-4e60-9654-df790137c41c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 9900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '359bf48c-b63c-4021-9cb0-375a53aa77b0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 7900,
                    fractionDigits: 2,
                  },
                  customerGroup: {
                    typeId: 'customer-group',
                    id: '94ed8367-5775-4871-bb5c-1ff84cfb7183',
                  },
                },
                {
                  id: 'db6eeda3-4de2-45ce-9c4b-9517df9d76dc',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 8900,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '03597822-d63c-4d23-ba0f-56780a87d3f3',
                  },
                },
                {
                  id: 'd4f8061b-cccf-46e0-9eb5-0c65c9fdae2d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 10400,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '5b04e2fd-2de9-4988-8918-361eede3abd5',
                  },
                },
                {
                  id: 'bd1095d2-b63a-4b79-a751-42355860261f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 17325,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'f52019a5-fac8-4745-b709-3fab893cbb90',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 168300,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '7f702031-6a8f-46ba-8400-1aa7d1434afd',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 134300,
                    fractionDigits: 2,
                  },
                  customerGroup: {
                    typeId: 'customer-group',
                    id: '94ed8367-5775-4871-bb5c-1ff84cfb7183',
                  },
                },
                {
                  id: 'd0347fb7-b860-4159-ad0c-913c32f7504d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 151300,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '03597822-d63c-4d23-ba0f-56780a87d3f3',
                  },
                },
                {
                  id: '5eb971a9-0f2a-440c-ad3f-de32593fc43f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 176800,
                    fractionDigits: 2,
                  },
                  channel: {
                    typeId: 'channel',
                    id: '5b04e2fd-2de9-4988-8918-361eede3abd5',
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Includes 1 chair' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '498c03dc-9c6d-4409-b8c5-6c3edd5a7a22',
                channels: {
                  'b8b5417e-b339-42fc-a01e-2f917633f48d': {
                    isOnStock: true,
                    availableQuantity: 25,
                    version: 1,
                    id: '3ab4f3f1-e493-4a0d-9b1d-1f0bb5efa8f4',
                  },
                  '03597822-d63c-4d23-ba0f-56780a87d3f3': {
                    isOnStock: true,
                    availableQuantity: 20,
                    version: 1,
                    id: 'a564db07-6e48-48b4-975b-cbf4e57b8894',
                  },
                },
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'c61b6475-1b0f-4a3c-9a45-c64be540d8fa',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: 'a5f08ccd-d17a-4334-9e0d-5042a8183cd3',
        version: 44,
        versionModifiedAt: '2023-10-26T17:21:47.548Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.182Z',
        lastModifiedAt: '2023-10-26T17:21:47.548Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Cocoa Pillow Cover',
              'en-CA': 'Cocoa Pillow Cover',
            },
            description: {
              'de-DE':
                'Ein quadratischer Kissenbezug aus Leinen ist eine Art Textilbezug für ein quadratisches Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse und Textur zu verleihen. Es besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.\n\nDer Kissenbezug ist so konzipiert, dass er über ein quadratisches Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat.\n\nDer Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind mit einem sauberen Saum oder einer Paspelierung versehen, was dem Gesamtdesign einen eleganten Look verleiht.\n\nDer Kissenbezug wird verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann alleine verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.\n\nInsgesamt ist ein quadratischer Kissenbezug aus Leinen ein vielseitiges und zeitloses Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann.',
              'en-GB':
                'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.\n\nThe pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.\n\nThe linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.\n\nThe pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.\n\nOverall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
              'es-MX':
                'Una funda de almohada de lino cuadrada es un tipo de revestimiento textil para una almohada de forma cuadrada que normalmente se usa para agregar interés visual y textura a una habitación. Está confeccionado con un tejido de lino natural, conocido por su durabilidad, transpirabilidad y aspecto clásico.\n\nLa funda de almohada está diseñada para caber sobre una almohada cuadrada de tamaño estándar, generalmente de alrededor de 18 pulgadas cuadradas.\n\nLa tela de lino tiene una superficie suave y ligeramente texturizada que añade una sensación acogedora y acogedora a la almohada. Los bordes de la funda de almohada están acabados con un dobladillo o ribete prolijo, lo que añade un aspecto pulido al diseño general.\n\nLa funda de almohada se utiliza para agregar un toque de calidez y elegancia natural a una habitación, ya sea que se coloque sobre una cama, un sofá o una silla decorativa. Se puede usar solo o combinado con otras almohadas decorativas de diferentes formas y colores para crear una apariencia cohesiva y en capas.\n\nEn general, una funda de almohada cuadrada de lino es una pieza decorativa versátil y atemporal que puede mejorar la comodidad y el estilo de cualquier habitación del hogar.',
              'en-US':
                'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.\n\nThe pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.\n\nThe linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.\n\nThe pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.\n\nOverall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
              'en-CA':
                'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.\n\nThe pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.\n\nThe linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.\n\nThe pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.\n\nOverall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'f15a26d5-77d1-4a2d-a07b-64013eab64b0',
              },
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'cocoa-pillow-cover',
              'en-US': 'cocoa-pillow-cover',
              'de-DE': 'kakao-kissenbezug',
              'es-MX': 'funda-almohada-cacao',
            },
            masterVariant: {
              id: 1,
              sku: 'BLPC-09',
              key: 'key-BLPC-09',
              prices: [
                {
                  id: '2aeb92ed-1c09-46cf-a3c7-d0b998611f84',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '460adff9-9655-4fd1-b8cd-893308b34192',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '6446e166-1982-4a20-91b7-12b35e7bd8d6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a45e5072-cb4b-4cd5-855b-974c929c24b8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1923,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '00962341-88e4-4d80-bfd8-c6dc2cb9eef6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 18683,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cocoa_Pillow_Cover-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Machine washable\n- Pillow not included',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: 'cbdc31a7-e2ad-4d3f-b633-d33927eed5f4',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Cocoa Pillow Cover',
              'en-CA': 'Cocoa Pillow Cover',
            },
            description: {
              'de-DE':
                'Ein quadratischer Kissenbezug aus Leinen ist eine Art Textilbezug für ein quadratisches Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse und Textur zu verleihen. Es besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.\n\nDer Kissenbezug ist so konzipiert, dass er über ein quadratisches Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat.\n\nDer Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind mit einem sauberen Saum oder einer Paspelierung versehen, was dem Gesamtdesign einen eleganten Look verleiht.\n\nDer Kissenbezug wird verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann alleine verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.\n\nInsgesamt ist ein quadratischer Kissenbezug aus Leinen ein vielseitiges und zeitloses Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann.',
              'en-GB':
                'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.\n\nThe pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.\n\nThe linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.\n\nThe pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.\n\nOverall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
              'es-MX':
                'Una funda de almohada de lino cuadrada es un tipo de revestimiento textil para una almohada de forma cuadrada que normalmente se usa para agregar interés visual y textura a una habitación. Está confeccionado con un tejido de lino natural, conocido por su durabilidad, transpirabilidad y aspecto clásico.\n\nLa funda de almohada está diseñada para caber sobre una almohada cuadrada de tamaño estándar, generalmente de alrededor de 18 pulgadas cuadradas.\n\nLa tela de lino tiene una superficie suave y ligeramente texturizada que añade una sensación acogedora y acogedora a la almohada. Los bordes de la funda de almohada están acabados con un dobladillo o ribete prolijo, lo que añade un aspecto pulido al diseño general.\n\nLa funda de almohada se utiliza para agregar un toque de calidez y elegancia natural a una habitación, ya sea que se coloque sobre una cama, un sofá o una silla decorativa. Se puede usar solo o combinado con otras almohadas decorativas de diferentes formas y colores para crear una apariencia cohesiva y en capas.\n\nEn general, una funda de almohada cuadrada de lino es una pieza decorativa versátil y atemporal que puede mejorar la comodidad y el estilo de cualquier habitación del hogar.',
              'en-US':
                'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.\n\nThe pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.\n\nThe linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.\n\nThe pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.\n\nOverall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
              'en-CA':
                'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.\n\nThe pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.\n\nThe linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.\n\nThe pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.\n\nOverall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'f15a26d5-77d1-4a2d-a07b-64013eab64b0',
              },
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'cocoa-pillow-cover',
              'en-US': 'cocoa-pillow-cover',
              'de-DE': 'kakao-kissenbezug',
              'es-MX': 'funda-almohada-cacao',
            },
            masterVariant: {
              id: 1,
              sku: 'BLPC-09',
              key: 'key-BLPC-09',
              prices: [
                {
                  id: '2aeb92ed-1c09-46cf-a3c7-d0b998611f84',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '460adff9-9655-4fd1-b8cd-893308b34192',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '6446e166-1982-4a20-91b7-12b35e7bd8d6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1099,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a45e5072-cb4b-4cd5-855b-974c929c24b8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1923,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '00962341-88e4-4d80-bfd8-c6dc2cb9eef6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 18683,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cocoa_Pillow_Cover-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Machine washable\n- Pillow not included',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: 'cbdc31a7-e2ad-4d3f-b633-d33927eed5f4',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'a5f08ccd-d17a-4334-9e0d-5042a8183cd3',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: 'c8313c0a-0bce-4463-90b4-6b76f5d7d59b',
        version: 85,
        versionModifiedAt: '2023-10-26T17:21:47.526Z',
        lastMessageSequenceNumber: 31,
        createdAt: '2023-05-01T20:26:52.186Z',
        lastModifiedAt: '2023-10-26T17:21:47.526Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Gold Rimmed Champagne Glasses - SHOP',
              'en-CA': 'Gold Rimmed Champagne Glasses - SHOP',
            },
            description: {
              'de-DE':
                'Ein Set Champagner-Kristallgläser mit Goldrand ist eine luxuriöse und elegante Art, Champagner oder Sekt zu servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.\n\nDie Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Das goldumrandete Detail verleiht dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und verleiht der Brille ein glamouröses und opulentes Aussehen.\n\nInsgesamt ist ein Set Champagner-Kristallgläser mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Ihr elegantes und zeitloses Design, kombiniert mit ihren hochwertigen Materialien und aufwendigen Details, machen sie zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern.',
              'en-GB':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
              'es-MX':
                'Un juego de copas de cristal para champán con borde dorado es una forma lujosa y elegante de servir champán o vino espumoso. Estas copas están hechas de cristal de alta calidad, lo que les da una apariencia clara y brillante que refleja maravillosamente las burbujas del champán.\n\nLos vasos cuentan con un tallo delicado y delgado, que permite al bebedor sostener el vaso sin calentar el contenido del interior. El detalle del borde dorado añade un toque extra de lujo y sofisticación al diseño, dando a las gafas una apariencia glamurosa y opulenta.\n\nEn general, un juego de copas de cristal para champán con borde dorado es una adición impresionante y lujosa a cualquier bar en casa o colección de entretenimiento. Su diseño elegante y atemporal, combinado con sus materiales de alta calidad y detalles intrincados, los convierten en la elección perfecta para celebrar con estilo los momentos especiales de la vida.\n\n-foo\nbar',
              'en-US':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.\n\n-foo\nbar",
              'en-CA':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.\n\n-foo\nbar",
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
              {
                typeId: 'category',
                id: '7b4fc048-68ab-4e12-be6a-c943a46e2d7c',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'gold-rimmed-champagne-glasses',
              'es-MX': 'copas-de-champn-con-borde-dorado',
            },
            metaDescription: {
              'en-GB':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
              'de-DE':
                'Ein Set Champagner-Kristallgläser mit Goldrand ist eine luxuriöse und elegante Art, Champagner oder Sekt zu servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.\n\nDie Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Das goldumrandete Detail verleiht dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und verleiht der Brille ein glamouröses und opulentes Aussehen.\n\nInsgesamt ist ein Set Champagner-Kristallgläser mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Ihr elegantes und zeitloses Design, kombiniert mit ihren hochwertigen Materialien und aufwendigen Details, machen sie zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern.',
              'en-US':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.\n\n-foo\nbar",
            },
            masterVariant: {
              id: 1,
              sku: 'GRCG-01',
              key: 'key-GRCG-01',
              prices: [
                {
                  id: '18636102-a45e-483a-ab8e-fa3672b1cdfe',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3000,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'dc803abe-b5c2-4fa7-804b-08f0ac2ea919',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 2799,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c90a0243-d89a-4251-b031-b98e88b56a4b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2799,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '0afcfbde-6be0-4415-9165-f89dff6363fa',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 4898,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'b20b78ab-080c-4932-b303-c235d7e7840b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 47583,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.3.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.4.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
                    'en-US':
                      '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
                    'de-DE':
                      '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
                  },
                },
                { name: 'badge-text', value: { 'en-US': 'On sale' } },
                {
                  name: 'badge-color',
                  value: { key: 'bg-yellow-500', label: 'Yellow' },
                },
                { name: 'backorderable', value: true },
              ],
              assets: [],
              availability: {
                isOnStock: false,
                restockableInDays: 5,
                availableQuantity: -1,
                version: 9,
                id: '8f811e39-e628-4355-a2c6-a1ec82a33c69',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Gold Rimmed Champagne Glasses - SHOP',
              'en-CA': 'Gold Rimmed Champagne Glasses - SHOP',
            },
            description: {
              'de-DE':
                'Ein Set Champagner-Kristallgläser mit Goldrand ist eine luxuriöse und elegante Art, Champagner oder Sekt zu servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.\n\nDie Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Das goldumrandete Detail verleiht dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und verleiht der Brille ein glamouröses und opulentes Aussehen.\n\nInsgesamt ist ein Set Champagner-Kristallgläser mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Ihr elegantes und zeitloses Design, kombiniert mit ihren hochwertigen Materialien und aufwendigen Details, machen sie zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern.',
              'en-GB':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
              'es-MX':
                'Un juego de copas de cristal para champán con borde dorado es una forma lujosa y elegante de servir champán o vino espumoso. Estas copas están hechas de cristal de alta calidad, lo que les da una apariencia clara y brillante que refleja maravillosamente las burbujas del champán.\n\nLos vasos cuentan con un tallo delicado y delgado, que permite al bebedor sostener el vaso sin calentar el contenido del interior. El detalle del borde dorado añade un toque extra de lujo y sofisticación al diseño, dando a las gafas una apariencia glamurosa y opulenta.\n\nEn general, un juego de copas de cristal para champán con borde dorado es una adición impresionante y lujosa a cualquier bar en casa o colección de entretenimiento. Su diseño elegante y atemporal, combinado con sus materiales de alta calidad y detalles intrincados, los convierten en la elección perfecta para celebrar con estilo los momentos especiales de la vida.\n\n-foo\nbar',
              'en-US':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.\n\n-foo\nbar",
              'en-CA':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.\n\n-foo\nbar",
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
              {
                typeId: 'category',
                id: '7b4fc048-68ab-4e12-be6a-c943a46e2d7c',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'gold-rimmed-champagne-glasses',
              'es-MX': 'copas-de-champn-con-borde-dorado',
            },
            metaDescription: {
              'en-GB':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.",
              'de-DE':
                'Ein Set Champagner-Kristallgläser mit Goldrand ist eine luxuriöse und elegante Art, Champagner oder Sekt zu servieren. Diese Gläser sind aus hochwertigem Kristall gefertigt, was ihnen ein klares und funkelndes Aussehen verleiht, das die Blasen im Champagner wunderschön widerspiegelt.\n\nDie Gläser verfügen über einen zarten und schlanken Stiel, der es dem Trinker ermöglicht, das Glas zu halten, ohne den Inhalt darin zu erwärmen. Das goldumrandete Detail verleiht dem Design einen zusätzlichen Hauch von Luxus und Raffinesse und verleiht der Brille ein glamouröses und opulentes Aussehen.\n\nInsgesamt ist ein Set Champagner-Kristallgläser mit Goldrand eine atemberaubende und luxuriöse Ergänzung für jede Hausbar oder Unterhaltungssammlung. Ihr elegantes und zeitloses Design, kombiniert mit ihren hochwertigen Materialien und aufwendigen Details, machen sie zur perfekten Wahl, um die besonderen Momente des Lebens stilvoll zu feiern.',
              'en-US':
                "A set of gold rimmed champagne crystal glasses is a luxurious and elegant way to serve champagne or sparkling wine. These glasses are made of high-quality crystal, which gives them a clear and sparkling appearance that beautifully reflects the bubbles in the champagne.\n\nThe glasses feature a delicate and slender stem, which allows the drinker to hold the glass without warming the contents inside. The gold rimmed detail adds an extra touch of luxury and sophistication to the design, giving the glasses a glamorous and opulent appearance.\n\nOverall, a set of gold rimmed champagne crystal glasses is a stunning and luxurious addition to any home bar or entertaining collection. Their elegant and timeless design, combined with their high-quality materials and intricate detailing, make them a perfect choice for celebrating life's special moments in style.\n\n-foo\nbar",
            },
            masterVariant: {
              id: 1,
              sku: 'GRCG-01',
              key: 'key-GRCG-01',
              prices: [
                {
                  id: '18636102-a45e-483a-ab8e-fa3672b1cdfe',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3000,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'dc803abe-b5c2-4fa7-804b-08f0ac2ea919',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 2799,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c90a0243-d89a-4251-b031-b98e88b56a4b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2799,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '0afcfbde-6be0-4415-9165-f89dff6363fa',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 4898,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'b20b78ab-080c-4932-b303-c235d7e7840b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 47583,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.3.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Gold_Rimmed_Champagne_Glasses-1.4.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
                    'en-US':
                      '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
                    'de-DE':
                      '- Set of 5 glasses\n- Imported crystal\n- Gold polish on the rims',
                  },
                },
                { name: 'badge-text', value: { 'en-US': 'On sale' } },
                {
                  name: 'badge-color',
                  value: { key: 'bg-yellow-500', label: 'Yellow' },
                },
                { name: 'backorderable', value: true },
              ],
              assets: [],
              availability: {
                isOnStock: false,
                restockableInDays: 5,
                availableQuantity: -1,
                version: 9,
                id: '8f811e39-e628-4355-a2c6-a1ec82a33c69',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'c8313c0a-0bce-4463-90b4-6b76f5d7d59b',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        priceMode: 'Embedded',
        lastVariantId: 1,
      },
      {
        id: '9f0dc8de-bf84-43dc-9600-0c1777155665',
        version: 44,
        versionModifiedAt: '2023-10-26T17:21:47.728Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.186Z',
        lastModifiedAt: '2023-10-26T17:21:47.728Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: { 'en-US': 'Natura Rug', 'en-CA': 'Natura Rug' },
            description: {
              'de-DE':
                'Ein runder Teppich aus Naturfasern ist eine Teppichart, die kreisförmig ist und aus Materialien besteht, die in der Natur vorkommen. Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, sind Jute, Sisal, Seegras und Bambus.\n\nDiese Teppiche haben aufgrund der Verwendung natürlicher Materialien, die einem Raum Wärme und Textur verleihen können, ein rustikales und organisches Gefühl. Die neutralen Töne dieser Fasern machen sie außerdem vielseitig und in der Lage, eine Reihe von Einrichtungsstilen zu ergänzen, von Bohème über Küsten bis hin zu Bauernhäusern.\n\nStruktur und Dicke eines runden Teppichs aus Naturfasern können je nach verwendetem Material variieren. Beispielsweise haben Jute und Sisal eine rauere Textur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.\n\nDie Herstellung dieser Teppiche erfolgt oft von Hand, was zu ihrer einzigartigen und einzigartigen Qualität beiträgt. Die Web- oder Flechttechnik, die zur Herstellung des Teppichs verwendet wird, kann dem Design auch visuelles Interesse verleihen, z. B. mit einem Fischgräten- oder Chevron-Muster.\n\nEin runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Essbereichen. Sie sind besonders beliebt in böhmischen und küstennahen Einrichtungsstilen, wo sie dem Raum eine entspannte und entspannte Atmosphäre verleihen können.\n\nInsgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Wohnkultur Textur und Wärme verleihen möchten.',
              'en-GB':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
              'es-MX':
                'Una alfombra redonda hecha de fibras naturales es un tipo de alfombra de forma circular y hecha de materiales que se encuentran en la naturaleza. Las fibras naturales que se utilizan habitualmente para este tipo de alfombras incluyen el yute, el sisal, las algas marinas y el bambú.\n\nEstas alfombras tienen una sensación rústica y orgánica debido al uso de materiales naturales, que pueden agregar calidez y textura a un espacio. Los tonos neutros de estas fibras también las hacen versátiles y capaces de complementar una variedad de estilos de decoración, desde bohemio hasta costero y de granja.\n\nLa textura y el grosor de una alfombra redonda hecha de fibras naturales pueden variar según el material utilizado. Por ejemplo, el yute y el sisal tienen una textura más rugosa y un pelo más fino, mientras que las algas y el bambú tienen una textura más suave y un pelo más grueso.\n\nLa construcción de estas alfombras suele realizarse a mano, lo que aumenta su calidad única y única. La técnica de tejido o trenzado utilizada para crear la alfombra también puede agregar interés visual al diseño, como con un patrón en espiga o en chevrón.\n\nUna alfombra redonda hecha de fibras naturales se puede utilizar en una variedad de espacios, desde salas de estar hasta dormitorios y comedores. Son especialmente populares en estilos de decoración bohemios y costeros, donde pueden agregar un ambiente relajado y relajado al espacio.\n\nEn general, una alfombra redonda hecha de fibras naturales es una opción elegante y ecológica para cualquiera que busque agregar textura y calidez a la decoración de su hogar.',
              'en-US':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
              'en-CA':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'bd1b6920-a111-43e0-8ed2-5756627d4efe',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'natura-rug',
              'en-US': 'natura-rug',
              'de-DE': 'natura-teppich',
              'es-MX': 'alfombra-naturaleza',
            },
            metaDescription: {
              'en-GB':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
              'de-DE':
                'Ein runder Teppich aus Naturfasern ist eine Teppichart, die kreisförmig ist und aus Materialien besteht, die in der Natur vorkommen. Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, sind Jute, Sisal, Seegras und Bambus.\n\nDiese Teppiche haben aufgrund der Verwendung natürlicher Materialien, die einem Raum Wärme und Textur verleihen können, ein rustikales und organisches Gefühl. Die neutralen Töne dieser Fasern machen sie außerdem vielseitig und in der Lage, eine Reihe von Einrichtungsstilen zu ergänzen, von Bohème über Küsten bis hin zu Bauernhäusern.\n\nStruktur und Dicke eines runden Teppichs aus Naturfasern können je nach verwendetem Material variieren. Beispielsweise haben Jute und Sisal eine rauere Textur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.\n\nDie Herstellung dieser Teppiche erfolgt oft von Hand, was zu ihrer einzigartigen und einzigartigen Qualität beiträgt. Die Web- oder Flechttechnik, die zur Herstellung des Teppichs verwendet wird, kann dem Design auch visuelles Interesse verleihen, z. B. mit einem Fischgräten- oder Chevron-Muster.\n\nEin runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Essbereichen. Sie sind besonders beliebt in böhmischen und küstennahen Einrichtungsstilen, wo sie dem Raum eine entspannte und entspannte Atmosphäre verleihen können.\n\nInsgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Wohnkultur Textur und Wärme verleihen möchten.',
              'en-US':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
            },
            masterVariant: {
              id: 1,
              sku: 'NR-09',
              key: 'key-NR-09',
              prices: [
                {
                  id: '68eabaf8-ecc1-4612-8ec0-8b786a0c3718',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 39900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '40cd7008-766c-4f42-ba5c-1f50954f4956',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 39900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '7ff75a2c-c6ba-4748-beb0-83803cc4cee6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 39900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'e0ca64bc-4a03-483e-a5ba-68e7162e018f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 69825,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '5c1e0f67-f834-4013-83c7-ec65d6e206c6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 678300,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Natura_Rug-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                { name: 'productspec', value: { 'en-GB': '- 6ft x 6ft' } },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '13695c42-8a15-4de7-9f18-a1bf281acc32',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: { 'en-US': 'Natura Rug', 'en-CA': 'Natura Rug' },
            description: {
              'de-DE':
                'Ein runder Teppich aus Naturfasern ist eine Teppichart, die kreisförmig ist und aus Materialien besteht, die in der Natur vorkommen. Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, sind Jute, Sisal, Seegras und Bambus.\n\nDiese Teppiche haben aufgrund der Verwendung natürlicher Materialien, die einem Raum Wärme und Textur verleihen können, ein rustikales und organisches Gefühl. Die neutralen Töne dieser Fasern machen sie außerdem vielseitig und in der Lage, eine Reihe von Einrichtungsstilen zu ergänzen, von Bohème über Küsten bis hin zu Bauernhäusern.\n\nStruktur und Dicke eines runden Teppichs aus Naturfasern können je nach verwendetem Material variieren. Beispielsweise haben Jute und Sisal eine rauere Textur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.\n\nDie Herstellung dieser Teppiche erfolgt oft von Hand, was zu ihrer einzigartigen und einzigartigen Qualität beiträgt. Die Web- oder Flechttechnik, die zur Herstellung des Teppichs verwendet wird, kann dem Design auch visuelles Interesse verleihen, z. B. mit einem Fischgräten- oder Chevron-Muster.\n\nEin runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Essbereichen. Sie sind besonders beliebt in böhmischen und küstennahen Einrichtungsstilen, wo sie dem Raum eine entspannte und entspannte Atmosphäre verleihen können.\n\nInsgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Wohnkultur Textur und Wärme verleihen möchten.',
              'en-GB':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
              'es-MX':
                'Una alfombra redonda hecha de fibras naturales es un tipo de alfombra de forma circular y hecha de materiales que se encuentran en la naturaleza. Las fibras naturales que se utilizan habitualmente para este tipo de alfombras incluyen el yute, el sisal, las algas marinas y el bambú.\n\nEstas alfombras tienen una sensación rústica y orgánica debido al uso de materiales naturales, que pueden agregar calidez y textura a un espacio. Los tonos neutros de estas fibras también las hacen versátiles y capaces de complementar una variedad de estilos de decoración, desde bohemio hasta costero y de granja.\n\nLa textura y el grosor de una alfombra redonda hecha de fibras naturales pueden variar según el material utilizado. Por ejemplo, el yute y el sisal tienen una textura más rugosa y un pelo más fino, mientras que las algas y el bambú tienen una textura más suave y un pelo más grueso.\n\nLa construcción de estas alfombras suele realizarse a mano, lo que aumenta su calidad única y única. La técnica de tejido o trenzado utilizada para crear la alfombra también puede agregar interés visual al diseño, como con un patrón en espiga o en chevrón.\n\nUna alfombra redonda hecha de fibras naturales se puede utilizar en una variedad de espacios, desde salas de estar hasta dormitorios y comedores. Son especialmente populares en estilos de decoración bohemios y costeros, donde pueden agregar un ambiente relajado y relajado al espacio.\n\nEn general, una alfombra redonda hecha de fibras naturales es una opción elegante y ecológica para cualquiera que busque agregar textura y calidez a la decoración de su hogar.',
              'en-US':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
              'en-CA':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'bd1b6920-a111-43e0-8ed2-5756627d4efe',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'natura-rug',
              'en-US': 'natura-rug',
              'de-DE': 'natura-teppich',
              'es-MX': 'alfombra-naturaleza',
            },
            metaDescription: {
              'en-GB':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
              'de-DE':
                'Ein runder Teppich aus Naturfasern ist eine Teppichart, die kreisförmig ist und aus Materialien besteht, die in der Natur vorkommen. Naturfasern, die üblicherweise für diese Art von Teppichen verwendet werden, sind Jute, Sisal, Seegras und Bambus.\n\nDiese Teppiche haben aufgrund der Verwendung natürlicher Materialien, die einem Raum Wärme und Textur verleihen können, ein rustikales und organisches Gefühl. Die neutralen Töne dieser Fasern machen sie außerdem vielseitig und in der Lage, eine Reihe von Einrichtungsstilen zu ergänzen, von Bohème über Küsten bis hin zu Bauernhäusern.\n\nStruktur und Dicke eines runden Teppichs aus Naturfasern können je nach verwendetem Material variieren. Beispielsweise haben Jute und Sisal eine rauere Textur und einen dünneren Flor, während Seegras und Bambus eine glattere Textur und einen dickeren Flor haben.\n\nDie Herstellung dieser Teppiche erfolgt oft von Hand, was zu ihrer einzigartigen und einzigartigen Qualität beiträgt. Die Web- oder Flechttechnik, die zur Herstellung des Teppichs verwendet wird, kann dem Design auch visuelles Interesse verleihen, z. B. mit einem Fischgräten- oder Chevron-Muster.\n\nEin runder Teppich aus Naturfasern kann in einer Vielzahl von Räumen verwendet werden, von Wohnzimmern über Schlafzimmer bis hin zu Essbereichen. Sie sind besonders beliebt in böhmischen und küstennahen Einrichtungsstilen, wo sie dem Raum eine entspannte und entspannte Atmosphäre verleihen können.\n\nInsgesamt ist ein runder Teppich aus Naturfasern eine stilvolle und umweltfreundliche Wahl für alle, die ihrer Wohnkultur Textur und Wärme verleihen möchten.',
              'en-US':
                'A round area rug made of natural fibers is a type of rug that is circular in shape and made from materials that are found in nature. Natural fibers commonly used for this type of rug include jute, sisal, seagrass, and bamboo.\n\nThese rugs have a rustic and organic feel due to the use of natural materials, which can add warmth and texture to a space. The neutral tones of these fibers also make them versatile and able to complement a range of decor styles, from bohemian to coastal to farmhouse.\n\nThe texture and thickness of a round area rug made of natural fibers can vary depending on the material used. For example, jute and sisal have a rougher texture and thinner pile, while seagrass and bamboo have a smoother texture and thicker pile.\n\nThe construction of these rugs is often done by hand, which adds to their unique and one-of-a-kind quality. The weaving or braiding technique used to create the rug can also add visual interest to the design, such as with a herringbone or chevron pattern.\n\nA round area rug made of natural fibers can be used in a variety of spaces, from living rooms to bedrooms to dining areas. They are especially popular in bohemian and coastal decor styles, where they can add a relaxed and laid-back vibe to the space.\n\nOverall, a round area rug made of natural fibers is a stylish and eco-friendly choice for anyone looking to add texture and warmth to their home decor.',
            },
            masterVariant: {
              id: 1,
              sku: 'NR-09',
              key: 'key-NR-09',
              prices: [
                {
                  id: '68eabaf8-ecc1-4612-8ec0-8b786a0c3718',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 39900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '40cd7008-766c-4f42-ba5c-1f50954f4956',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 39900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '7ff75a2c-c6ba-4748-beb0-83803cc4cee6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 39900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'e0ca64bc-4a03-483e-a5ba-68e7162e018f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 69825,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '5c1e0f67-f834-4013-83c7-ec65d6e206c6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 678300,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Natura_Rug-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                { name: 'productspec', value: { 'en-GB': '- 6ft x 6ft' } },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '13695c42-8a15-4de7-9f18-a1bf281acc32',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '9f0dc8de-bf84-43dc-9600-0c1777155665',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '8a5a22cf-4724-43e5-8d42-9617dbd68383',
        version: 45,
        versionModifiedAt: '2023-10-26T17:21:47.668Z',
        lastMessageSequenceNumber: 20,
        createdAt: '2023-05-01T20:26:52.193Z',
        lastModifiedAt: '2023-10-26T17:21:47.668Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Rye Whiskey Glass',
              'en-CA': 'Rye Whiskey Glass',
            },
            description: {
              'de-DE':
                'Das Rye Whiskyglas wurde speziell für den Genuss von Whisky oder anderen Spirituosen entwickelt. Es hat eine kurze, breite Form mit einer dicken, schweren Basis, die für Stabilität und Gleichgewicht sorgt.\n\nDas Design des Whiskyglases soll das Trinkerlebnis verbessern, indem das Aroma und der Geschmack des Whiskys voll zur Geltung kommen. Die weite Öffnung des Glases ermöglicht es dem Trinker, die Farbe, Klarheit und Textur des Whiskys voll und ganz zu schätzen, während der schwere Boden dazu beiträgt, dass das Getränk nicht verschüttet oder umkippt.\n\nInsgesamt ist das Rye Whiskyglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma von feinem Whisky zu genießen. Sein einfaches, aber elegantes Design macht ihn zu einer beliebten Wahl für Whiskykenner und Gelegenheitstrinker gleichermaßen.',
              'en-GB':
                "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.\n\nThe design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.\n\nOverall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
              'es-MX':
                'El vaso de whisky Rye está diseñado específicamente para disfrutar de whisky u otras bebidas espirituosas. Tiene una forma corta y ancha con una base gruesa y pesada que proporciona estabilidad y equilibrio.\n\nEl diseño del vaso de whisky tiene como objetivo mejorar la experiencia de beber permitiendo apreciar plenamente el aroma y el sabor del whisky. La amplia apertura del vaso permite al bebedor apreciar plenamente el color, la claridad y la textura del whisky, mientras que la base pesada ayuda a evitar que la bebida se derrame o se vuelque.\n\nEn general, el vaso de whisky de centeno es un tipo de vaso clásico y atemporal ideal para saborear el rico sabor y aroma del fino whisky. Su diseño simple pero elegante lo convierte en una opción popular tanto para los conocedores del whisky como para los bebedores ocasionales.',
              'en-US':
                "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.\n\nThe design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.\n\nOverall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
              'en-CA':
                "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.\n\nThe design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.\n\nOverall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'rye-whiskey-glass',
              'en-US': 'rye-whiskey-glass',
              'de-DE': 'roggen-whisky-glas',
              'es-MX': 'vaso-de-whisky-de-centeno',
            },
            masterVariant: {
              id: 1,
              sku: 'RWG-09',
              key: 'key-RWG-09',
              prices: [
                {
                  id: 'd9390287-a337-48e6-a08a-d75bfb262a16',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '76590576-0dfc-4762-a5f8-08628c80f898',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 3499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '193b5898-8c34-4786-902b-8f6cb54a58be',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 3499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '099d1ab3-e6bc-4ab8-bbe1-0fc8b5f68069',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 6123,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'be3b2e1b-d4a8-4dfb-accd-ac85ae13291d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 59483,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Set includes 6 glasses' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '47a2da7c-2720-4df6-9466-a5a794895f92',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Rye Whiskey Glass',
              'en-CA': 'Rye Whiskey Glass',
            },
            description: {
              'de-DE':
                'Das Rye Whiskyglas wurde speziell für den Genuss von Whisky oder anderen Spirituosen entwickelt. Es hat eine kurze, breite Form mit einer dicken, schweren Basis, die für Stabilität und Gleichgewicht sorgt.\n\nDas Design des Whiskyglases soll das Trinkerlebnis verbessern, indem das Aroma und der Geschmack des Whiskys voll zur Geltung kommen. Die weite Öffnung des Glases ermöglicht es dem Trinker, die Farbe, Klarheit und Textur des Whiskys voll und ganz zu schätzen, während der schwere Boden dazu beiträgt, dass das Getränk nicht verschüttet oder umkippt.\n\nInsgesamt ist das Rye Whiskyglas ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma von feinem Whisky zu genießen. Sein einfaches, aber elegantes Design macht ihn zu einer beliebten Wahl für Whiskykenner und Gelegenheitstrinker gleichermaßen.',
              'en-GB':
                "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.\n\nThe design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.\n\nOverall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
              'es-MX':
                'El vaso de whisky Rye está diseñado específicamente para disfrutar de whisky u otras bebidas espirituosas. Tiene una forma corta y ancha con una base gruesa y pesada que proporciona estabilidad y equilibrio.\n\nEl diseño del vaso de whisky tiene como objetivo mejorar la experiencia de beber permitiendo apreciar plenamente el aroma y el sabor del whisky. La amplia apertura del vaso permite al bebedor apreciar plenamente el color, la claridad y la textura del whisky, mientras que la base pesada ayuda a evitar que la bebida se derrame o se vuelque.\n\nEn general, el vaso de whisky de centeno es un tipo de vaso clásico y atemporal ideal para saborear el rico sabor y aroma del fino whisky. Su diseño simple pero elegante lo convierte en una opción popular tanto para los conocedores del whisky como para los bebedores ocasionales.',
              'en-US':
                "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.\n\nThe design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.\n\nOverall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
              'en-CA':
                "The Rye Whiskey Glass is designed specifically for enjoying whiskey or other spirits. It has a short, wide shape with a thick, heavy base that provides stability and balance.\n\nThe design of the whiskey glass is intended to enhance the drinking experience by allowing the whiskey's aroma and flavor to be fully appreciated. The wide opening of the glass allows the drinker to fully appreciate the color, clarity, and texture of the whiskey, while the heavy base helps to keep the drink from spilling or tipping over.\n\nOverall, the Rye Whiskey Glass  is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine whiskey. Its simple yet elegant design makes it a popular choice for whiskey connoisseurs and casual drinkers alike.",
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'rye-whiskey-glass',
              'en-US': 'rye-whiskey-glass',
              'de-DE': 'roggen-whisky-glas',
              'es-MX': 'vaso-de-whisky-de-centeno',
            },
            masterVariant: {
              id: 1,
              sku: 'RWG-09',
              key: 'key-RWG-09',
              prices: [
                {
                  id: 'd9390287-a337-48e6-a08a-d75bfb262a16',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '76590576-0dfc-4762-a5f8-08628c80f898',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 3499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '193b5898-8c34-4786-902b-8f6cb54a58be',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 3499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '099d1ab3-e6bc-4ab8-bbe1-0fc8b5f68069',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 6123,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'be3b2e1b-d4a8-4dfb-accd-ac85ae13291d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 59483,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rye_Whiskey_Glass-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Set includes 6 glasses' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '47a2da7c-2720-4df6-9466-a5a794895f92',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '8a5a22cf-4724-43e5-8d42-9617dbd68383',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '0106ed9e-7d6e-48bb-8824-17ef159c86ea',
        version: 44,
        versionModifiedAt: '2023-10-26T17:21:47.741Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.208Z',
        lastModifiedAt: '2023-10-26T17:21:47.741Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: { 'en-US': 'Rustic Bowl', 'en-CA': 'Rustic Bowl' },
            description: {
              'de-DE':
                'Diese quadratische Holzschale ist vielseitig und kann für eine Vielzahl von Zwecken verwendet werden, vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Es ist ideal für ungezwungene oder rustikale Speiseumgebungen und kann jedem Tisch einen Hauch von Wärme und natürlicher Schönheit verleihen.\n\nDie quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Seine natürliche Schönheit und Langlebigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen und Anlässen.',
              'en-GB':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
              'es-MX':
                'Este cuenco cuadrado de madera es versátil y se puede utilizar para diversos fines, desde servir ensaladas y refrigerios hasta guardar frutas y verduras. Es ideal para cenas informales o rústicas y puede agregar un toque de calidez y belleza natural a cualquier mesa.\n\nEl cuenco cuadrado de madera es una opción práctica y elegante para servir y guardar alimentos. Su belleza natural y durabilidad lo convierten en una opción popular para muchos tipos diferentes de cocina y cenas.',
              'en-US':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
              'en-CA':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'f6432f90-dfa6-45b2-abc7-d4c5e901a64f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'rustic-bowl',
              'en-US': 'rustic-bowl',
              'de-DE': 'rustikale-schale',
              'es-MX': 'cuenco-rstico',
            },
            metaDescription: {
              'en-GB':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
              'de-DE':
                'Diese quadratische Holzschale ist vielseitig und kann für eine Vielzahl von Zwecken verwendet werden, vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Es ist ideal für ungezwungene oder rustikale Speiseumgebungen und kann jedem Tisch einen Hauch von Wärme und natürlicher Schönheit verleihen.\n\nDie quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Seine natürliche Schönheit und Langlebigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen und Anlässen.',
              'en-US':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
            },
            masterVariant: {
              id: 1,
              sku: 'RB-01',
              key: 'key-RB-01',
              prices: [
                {
                  id: 'c45f1791-0cd6-4930-a273-b32b7891b8e7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '1d8e3d77-f772-4280-b9c3-1a4a6b9c2b28',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'de385501-95b6-4c8f-ad94-5c4f34083902',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'b65a9e05-8cb2-497b-93d4-444fb4ac53ab',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 348,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '3ef5dbde-a4c7-441f-b353-0a262326ea4f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 3383,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Bowl-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Includes 1 bowl' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '4091bdb5-ca5e-412c-9239-57c1d41f578e',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: { 'en-US': 'Rustic Bowl', 'en-CA': 'Rustic Bowl' },
            description: {
              'de-DE':
                'Diese quadratische Holzschale ist vielseitig und kann für eine Vielzahl von Zwecken verwendet werden, vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Es ist ideal für ungezwungene oder rustikale Speiseumgebungen und kann jedem Tisch einen Hauch von Wärme und natürlicher Schönheit verleihen.\n\nDie quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Seine natürliche Schönheit und Langlebigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen und Anlässen.',
              'en-GB':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
              'es-MX':
                'Este cuenco cuadrado de madera es versátil y se puede utilizar para diversos fines, desde servir ensaladas y refrigerios hasta guardar frutas y verduras. Es ideal para cenas informales o rústicas y puede agregar un toque de calidez y belleza natural a cualquier mesa.\n\nEl cuenco cuadrado de madera es una opción práctica y elegante para servir y guardar alimentos. Su belleza natural y durabilidad lo convierten en una opción popular para muchos tipos diferentes de cocina y cenas.',
              'en-US':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
              'en-CA':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'f6432f90-dfa6-45b2-abc7-d4c5e901a64f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'rustic-bowl',
              'en-US': 'rustic-bowl',
              'de-DE': 'rustikale-schale',
              'es-MX': 'cuenco-rstico',
            },
            metaDescription: {
              'en-GB':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
              'de-DE':
                'Diese quadratische Holzschale ist vielseitig und kann für eine Vielzahl von Zwecken verwendet werden, vom Servieren von Salaten und Snacks bis hin zum Aufbewahren von Obst und Gemüse. Es ist ideal für ungezwungene oder rustikale Speiseumgebungen und kann jedem Tisch einen Hauch von Wärme und natürlicher Schönheit verleihen.\n\nDie quadratische Holzschale ist eine praktische und stilvolle Wahl zum Servieren und Aufbewahren von Speisen. Seine natürliche Schönheit und Langlebigkeit machen es zu einer beliebten Wahl für viele verschiedene Arten von Küchen und Anlässen.',
              'en-US':
                'This square wooden bowl is versatile and can be used for a variety of purposes, from serving salads and snacks to holding fruits and vegetables. It is ideal for casual or rustic dining settings and can add a touch of warmth and natural beauty to any table.\n\nThe square wooden bowl is a practical and stylish choice for serving and holding food. Its natural beauty and durability make it a popular choice for many different types of cuisine and dining occasions.',
            },
            masterVariant: {
              id: 1,
              sku: 'RB-01',
              key: 'key-RB-01',
              prices: [
                {
                  id: 'c45f1791-0cd6-4930-a273-b32b7891b8e7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '1d8e3d77-f772-4280-b9c3-1a4a6b9c2b28',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'de385501-95b6-4c8f-ad94-5c4f34083902',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'b65a9e05-8cb2-497b-93d4-444fb4ac53ab',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 348,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '3ef5dbde-a4c7-441f-b353-0a262326ea4f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 3383,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Bowl-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Includes 1 bowl' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '4091bdb5-ca5e-412c-9239-57c1d41f578e',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '0106ed9e-7d6e-48bb-8824-17ef159c86ea',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '28a35e3b-35ee-4740-94c6-3d33c252631f',
        version: 44,
        versionModifiedAt: '2023-10-26T17:21:47.525Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.208Z',
        lastModifiedAt: '2023-10-26T17:21:47.525Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Cocktail Shaker Set',
              'en-CA': 'Cocktail Shaker Set',
            },
            description: {
              'de-DE':
                'Dieses Set für die Cocktailzubereitung umfasst einen Shaker, ein Sieb, einen Jigger und eine Zange, die alle aus vergoldetem Edelstahl bestehen. Der Shaker ist ein zweiteiliger Behälter mit einem Deckel, der fest sitzt, um ein Verschütten zu verhindern. Das Sieb passt über die Oberseite des Shakers, um feste Zutaten oder Eis aus dem Cocktail zu entfernen, wenn er in das Glas gegossen wird. Der Jigger ist ein kleiner Messbecher, der dabei hilft, die Zutaten präzise abzumessen. Das Gold-Finish verleiht dem Set ein luxuriöses, elegantes Aussehen, das sich perfekt für die Unterhaltung oder die Zubereitung besonderer Cocktails zu Hause eignet.',
              'en-GB':
                "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
              'es-MX':
                'Este juego para preparar cócteles incluye una coctelera, un colador, un jigger y pinzas, todos ellos hechos de acero inoxidable con un acabado chapado en oro. La coctelera es un recipiente de dos piezas con una tapa que se ajusta herméticamente para evitar derrames. El colador se coloca sobre la parte superior de la coctelera para eliminar los ingredientes sólidos o el hielo del cóctel mientras se vierte en el vaso. El jigger es una pequeña taza medidora que ayuda a garantizar mediciones precisas de los ingredientes. El acabado dorado le da al juego un aspecto lujoso y elegante que es perfecto para recibir invitados o crear cócteles especiales en casa.',
              'en-US':
                "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
              'en-CA':
                "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
            },
            categories: [
              {
                typeId: 'category',
                id: '1690b904-a72f-41f7-aa45-97e6168349f2',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'cocktail-shaker-set',
              'en-US': 'cocktail-shaker-set',
              'de-DE': 'cocktail-shaker-set',
              'es-MX': 'juego-de-coctelera',
            },
            masterVariant: {
              id: 1,
              sku: 'COC-0843',
              key: 'key-COC-0843',
              prices: [
                {
                  id: 'ef2567cc-acf4-4c6d-83f1-2c572b3d5ab3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '1841e65d-d20a-4ea1-ac06-6b6a7688866b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'd51a2235-f492-4e1e-a7be-cce5bad9e6af',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'ce74eaf4-1e6c-473c-ba21-0152f3cbbd81',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 2798,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'f1a3c216-bf01-4f83-83ca-2d751e6eb228',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 27183,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cocktail_Shaker_Set-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Stainless steel\n- Hand wash only' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: 'e2e5621e-f610-41ac-82a6-03e1621debaa',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Cocktail Shaker Set',
              'en-CA': 'Cocktail Shaker Set',
            },
            description: {
              'de-DE':
                'Dieses Set für die Cocktailzubereitung umfasst einen Shaker, ein Sieb, einen Jigger und eine Zange, die alle aus vergoldetem Edelstahl bestehen. Der Shaker ist ein zweiteiliger Behälter mit einem Deckel, der fest sitzt, um ein Verschütten zu verhindern. Das Sieb passt über die Oberseite des Shakers, um feste Zutaten oder Eis aus dem Cocktail zu entfernen, wenn er in das Glas gegossen wird. Der Jigger ist ein kleiner Messbecher, der dabei hilft, die Zutaten präzise abzumessen. Das Gold-Finish verleiht dem Set ein luxuriöses, elegantes Aussehen, das sich perfekt für die Unterhaltung oder die Zubereitung besonderer Cocktails zu Hause eignet.',
              'en-GB':
                "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
              'es-MX':
                'Este juego para preparar cócteles incluye una coctelera, un colador, un jigger y pinzas, todos ellos hechos de acero inoxidable con un acabado chapado en oro. La coctelera es un recipiente de dos piezas con una tapa que se ajusta herméticamente para evitar derrames. El colador se coloca sobre la parte superior de la coctelera para eliminar los ingredientes sólidos o el hielo del cóctel mientras se vierte en el vaso. El jigger es una pequeña taza medidora que ayuda a garantizar mediciones precisas de los ingredientes. El acabado dorado le da al juego un aspecto lujoso y elegante que es perfecto para recibir invitados o crear cócteles especiales en casa.',
              'en-US':
                "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
              'en-CA':
                "This cocktail making set includes a shaker, strainer, a jigger, and tongs, all of which are made of stainless steel with a gold-plated finish. The shaker is a two-piece container with a lid that fits tightly to prevent spillage. The strainer fits over the top of the shaker to remove any solid ingredients or ice from the cocktail as it's poured into the glass. The jigger is a small measuring cup that helps ensure precise measurements of ingredients. The gold finish gives the set a luxurious, elegant look that's perfect for entertaining or creating special cocktails at home.",
            },
            categories: [
              {
                typeId: 'category',
                id: '1690b904-a72f-41f7-aa45-97e6168349f2',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'cocktail-shaker-set',
              'en-US': 'cocktail-shaker-set',
              'de-DE': 'cocktail-shaker-set',
              'es-MX': 'juego-de-coctelera',
            },
            masterVariant: {
              id: 1,
              sku: 'COC-0843',
              key: 'key-COC-0843',
              prices: [
                {
                  id: 'ef2567cc-acf4-4c6d-83f1-2c572b3d5ab3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '1841e65d-d20a-4ea1-ac06-6b6a7688866b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'd51a2235-f492-4e1e-a7be-cce5bad9e6af',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1599,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'ce74eaf4-1e6c-473c-ba21-0152f3cbbd81',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 2798,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'f1a3c216-bf01-4f83-83ca-2d751e6eb228',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 27183,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cocktail_Shaker_Set-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Stainless steel\n- Hand wash only' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: 'e2e5621e-f610-41ac-82a6-03e1621debaa',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '28a35e3b-35ee-4740-94c6-3d33c252631f',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: 'ee613ef0-b542-410d-b91b-3af352f3dab8',
        version: 58,
        versionModifiedAt: '2023-10-26T17:21:47.510Z',
        lastMessageSequenceNumber: 23,
        createdAt: '2023-05-01T20:26:52.211Z',
        lastModifiedAt: '2023-10-26T17:21:47.510Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Round Serving Tray',
              'en-CA': 'Round Serving Tray',
            },
            description: {
              'de-DE':
                'Dieses runde Serviertablett ist ein vielseitiger und langlebiger Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das für das Tablett verwendete Holzmaterial sorgt für eine warme und natürliche Ästhetik und verleiht jeder Umgebung einen Hauch von rustikalem Charme.\n\nRunde Serviertabletts aus Holz sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden und sollten nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.\n\nInsgesamt ist ein rundes Serviertablett aus Holz ein praktisches und attraktives Element, das jedem Ambiente einen Hauch von natürlicher Eleganz verleiht. Seine Langlebigkeit, Vielseitigkeit und Designvielfalt machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.',
              'en-GB':
                'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.\n\nRound wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.\n\nOverall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
              'es-MX':
                'Esta bandeja redonda para servir es un artículo versátil y duradero que se puede utilizar en una variedad de entornos. El material de madera utilizado en la bandeja proporciona una estética cálida y natural, añadiendo un toque de encanto rústico a cualquier entorno.\n\nLas bandejas redondas de madera para servir son fáciles de limpiar y mantener. Se pueden limpiar con un paño húmedo y un detergente suave, y se deben secar bien después de su uso para evitar que quede humedad atrapada en el interior.\n\nEn general, una bandeja redonda de madera para servir es un artículo práctico y atractivo que añade un toque de elegancia natural a cualquier entorno. Su durabilidad, versatilidad y variedad de diseños lo convierten en una opción popular para servir y exhibir alimentos, bebidas y otros artículos.',
              'en-US':
                'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.\n\nRound wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.\n\nOverall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
              'en-CA':
                'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.\n\nRound wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.\n\nOverall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
            },
            categories: [
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
              {
                typeId: 'category',
                id: '08470482-2c9a-444b-8f77-c553c069fe85',
              },
              {
                typeId: 'category',
                id: '2eb51e21-c5b0-44ed-ba70-174d0ccc700d',
              },
              {
                typeId: 'category',
                id: 'fe61becd-7fe6-4201-99c2-9ceff28eb6f2',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'round-serving-tray',
              'en-US': 'round-serving-tray',
              'de-DE': 'rundes-serviertablett',
              'es-MX': 'bandeja-redonda-para-servir',
            },
            masterVariant: {
              id: 1,
              sku: 'RST-01',
              key: 'key-RST-01',
              prices: [
                {
                  id: '82689c12-bb27-4f23-b784-98b9e307152c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '04b99fa4-16c4-4da3-8f32-7bb9e19b3b22',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'fcdd0cc4-271f-4ee2-a4aa-dc309f025d6a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '1e2585b5-e78d-4154-aed4-7a7f9881ec1b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 873,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '57979229-d4c9-41f9-9f85-40c478601868',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 8483,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                { name: 'productspec', value: { 'en-GB': '- Hand wash only' } },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 97,
                version: 8,
                id: '0069662e-c914-4418-8d4d-17ab3090473c',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Round Serving Tray',
              'en-CA': 'Round Serving Tray',
            },
            description: {
              'de-DE':
                'Dieses runde Serviertablett ist ein vielseitiger und langlebiger Artikel, der in einer Vielzahl von Umgebungen verwendet werden kann. Das für das Tablett verwendete Holzmaterial sorgt für eine warme und natürliche Ästhetik und verleiht jeder Umgebung einen Hauch von rustikalem Charme.\n\nRunde Serviertabletts aus Holz sind leicht zu reinigen und zu pflegen. Sie können mit einem feuchten Tuch und einem milden Reinigungsmittel abgewischt werden und sollten nach Gebrauch gründlich getrocknet werden, um zu verhindern, dass Feuchtigkeit im Inneren eingeschlossen wird.\n\nInsgesamt ist ein rundes Serviertablett aus Holz ein praktisches und attraktives Element, das jedem Ambiente einen Hauch von natürlicher Eleganz verleiht. Seine Langlebigkeit, Vielseitigkeit und Designvielfalt machen ihn zu einer beliebten Wahl zum Servieren und Präsentieren von Speisen, Getränken und anderen Gegenständen.',
              'en-GB':
                'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.\n\nRound wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.\n\nOverall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
              'es-MX':
                'Esta bandeja redonda para servir es un artículo versátil y duradero que se puede utilizar en una variedad de entornos. El material de madera utilizado en la bandeja proporciona una estética cálida y natural, añadiendo un toque de encanto rústico a cualquier entorno.\n\nLas bandejas redondas de madera para servir son fáciles de limpiar y mantener. Se pueden limpiar con un paño húmedo y un detergente suave, y se deben secar bien después de su uso para evitar que quede humedad atrapada en el interior.\n\nEn general, una bandeja redonda de madera para servir es un artículo práctico y atractivo que añade un toque de elegancia natural a cualquier entorno. Su durabilidad, versatilidad y variedad de diseños lo convierten en una opción popular para servir y exhibir alimentos, bebidas y otros artículos.',
              'en-US':
                'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.\n\nRound wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.\n\nOverall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
              'en-CA':
                'This Round Serving Tray is a versatile and durable item that can be used in a variety of settings. The wooden material used in the tray provides a warm and natural aesthetic, adding a touch of rustic charm to any setting.\n\nRound wooden serving trays are easy to clean and maintain. They can be wiped down with a damp cloth and mild detergent, and should be dried thoroughly after use to prevent any moisture from being trapped inside.\n\nOverall, a round wooden serving tray is a practical and attractive item that adds a touch of natural elegance to any setting. Its durability, versatility, and range of designs make it a popular choice for serving and displaying food, drinks, and other items.',
            },
            categories: [
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
              {
                typeId: 'category',
                id: '08470482-2c9a-444b-8f77-c553c069fe85',
              },
              {
                typeId: 'category',
                id: '2eb51e21-c5b0-44ed-ba70-174d0ccc700d',
              },
              {
                typeId: 'category',
                id: 'fe61becd-7fe6-4201-99c2-9ceff28eb6f2',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'round-serving-tray',
              'en-US': 'round-serving-tray',
              'de-DE': 'rundes-serviertablett',
              'es-MX': 'bandeja-redonda-para-servir',
            },
            masterVariant: {
              id: 1,
              sku: 'RST-01',
              key: 'key-RST-01',
              prices: [
                {
                  id: '82689c12-bb27-4f23-b784-98b9e307152c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '04b99fa4-16c4-4da3-8f32-7bb9e19b3b22',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'fcdd0cc4-271f-4ee2-a4aa-dc309f025d6a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '1e2585b5-e78d-4154-aed4-7a7f9881ec1b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 873,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '57979229-d4c9-41f9-9f85-40c478601868',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 8483,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Round_Serving_Tray-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                { name: 'productspec', value: { 'en-GB': '- Hand wash only' } },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 97,
                version: 8,
                id: '0069662e-c914-4418-8d4d-17ab3090473c',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'ee613ef0-b542-410d-b91b-3af352f3dab8',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '73d89f07-87d2-4896-808b-aadb6e27f0ce',
        version: 46,
        versionModifiedAt: '2023-10-26T17:21:47.724Z',
        lastMessageSequenceNumber: 20,
        createdAt: '2023-05-01T20:26:52.224Z',
        lastModifiedAt: '2023-10-26T17:21:47.724Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: { 'en-US': 'Cube Jute Basket', 'en-CA': 'Cube Jute Basket' },
            description: {
              'de-DE':
                'Ein Würfel-Jutekorb für das Wohnzimmer ist eine praktische und stilvolle Aufbewahrungslösung, die dem Raum Wärme und Struktur verleiht. Der Korb besteht aus natürlichen Jutefasern, die eng miteinander verwoben sind, um eine robuste und langlebige Struktur zu schaffen.\n\nDie Würfelform des Korbs eignet sich perfekt zur Aufbewahrung einer Vielzahl von Gegenständen wie Decken, Zeitschriften, Fernbedienungen oder sogar kleinen Pflanzen. Die offene Oberseite des Korbs ermöglicht einen einfachen Zugriff auf den Inhalt, während die Seiten eine sichere Barriere bieten, um alles ordentlich zu verstauen.\n\nDie neutrale Farbe der Jutefasern ergänzt eine Vielzahl von Einrichtungsstilen, von böhmisch über küstennah bis rustikal. Der Korb kann auf den Boden oder in ein Regal gestellt werden und lässt sich dank seiner kompakten Größe bei Bedarf leicht bewegen.',
              'en-GB':
                'A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.\n\nThe cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.\n\nThe neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.',
              'es-MX':
                'Una cesta cúbica de yute para el salón es una solución de almacenamiento práctica y elegante que aporta calidez y textura al espacio. La canasta está hecha de fibras de yute natural, que están estrechamente entrelazadas para crear una estructura resistente y duradera.\n\nLa forma cúbica de la cesta es perfecta para guardar una variedad de artículos, como mantas, revistas, controles remotos o incluso plantas pequeñas. La parte superior abierta de la cesta permite un fácil acceso a su contenido, mientras que los laterales proporcionan una barrera segura para mantener todo perfectamente contenido.\n\nEl color neutro de las fibras de yute complementa una variedad de estilos de decoración, desde bohemio hasta costero y rústico. La cesta se puede colocar en el suelo o en un estante y su tamaño compacto facilita su desplazamiento según sea necesario.',
              'en-US':
                'A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.\n\nThe cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.\n\nThe neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.',
              'en-CA':
                'A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.\n\nThe cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.\n\nThe neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'cube-jute-basket',
              'es-MX': 'cesta-de-yute-cubo',
            },
            masterVariant: {
              id: 1,
              sku: 'CJB-01',
              key: 'key-CJB-01',
              prices: [
                {
                  id: '87877e65-8eef-4c89-a9f1-63f192d55725',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a1bc119d-a4f1-40ed-a249-12cd15e47d11',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1000,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '923fc31a-76ed-4322-a7e9-35fb757e1a95',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'fde44c7e-6a1d-4fbf-b647-f044c755e5bc',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1750,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '69a7a387-b201-4d31-98ee-55cf837362b0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 17000,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cube_Jute_Basket-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
                    'en-US': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 96,
                version: 1,
                id: '0d975c2b-04d1-45ba-a190-d86498eaf0a6',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: { 'en-US': 'Cube Jute Basket', 'en-CA': 'Cube Jute Basket' },
            description: {
              'de-DE':
                'Ein Würfel-Jutekorb für das Wohnzimmer ist eine praktische und stilvolle Aufbewahrungslösung, die dem Raum Wärme und Struktur verleiht. Der Korb besteht aus natürlichen Jutefasern, die eng miteinander verwoben sind, um eine robuste und langlebige Struktur zu schaffen.\n\nDie Würfelform des Korbs eignet sich perfekt zur Aufbewahrung einer Vielzahl von Gegenständen wie Decken, Zeitschriften, Fernbedienungen oder sogar kleinen Pflanzen. Die offene Oberseite des Korbs ermöglicht einen einfachen Zugriff auf den Inhalt, während die Seiten eine sichere Barriere bieten, um alles ordentlich zu verstauen.\n\nDie neutrale Farbe der Jutefasern ergänzt eine Vielzahl von Einrichtungsstilen, von böhmisch über küstennah bis rustikal. Der Korb kann auf den Boden oder in ein Regal gestellt werden und lässt sich dank seiner kompakten Größe bei Bedarf leicht bewegen.',
              'en-GB':
                'A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.\n\nThe cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.\n\nThe neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.',
              'es-MX':
                'Una cesta cúbica de yute para el salón es una solución de almacenamiento práctica y elegante que aporta calidez y textura al espacio. La canasta está hecha de fibras de yute natural, que están estrechamente entrelazadas para crear una estructura resistente y duradera.\n\nLa forma cúbica de la cesta es perfecta para guardar una variedad de artículos, como mantas, revistas, controles remotos o incluso plantas pequeñas. La parte superior abierta de la cesta permite un fácil acceso a su contenido, mientras que los laterales proporcionan una barrera segura para mantener todo perfectamente contenido.\n\nEl color neutro de las fibras de yute complementa una variedad de estilos de decoración, desde bohemio hasta costero y rústico. La cesta se puede colocar en el suelo o en un estante y su tamaño compacto facilita su desplazamiento según sea necesario.',
              'en-US':
                'A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.\n\nThe cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.\n\nThe neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.',
              'en-CA':
                'A cube jute basket for the living room is a practical and stylish storage solution that adds warmth and texture to the space. The basket is made from natural jute fibers, which are tightly woven together to create a sturdy and durable structure.\n\nThe cube shape of the basket is perfect for storing a variety of items, such as blankets, magazines, remote controls, or even small plants. The open top of the basket allows for easy access to its contents, while the sides provide a secure barrier to keep everything neatly contained.\n\nThe neutral color of the jute fibers complements a variety of decor styles, from bohemian to coastal to rustic. The basket can be placed on the floor or on a shelf, and its compact size makes it easy to move around as needed.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'cube-jute-basket',
              'es-MX': 'cesta-de-yute-cubo',
            },
            masterVariant: {
              id: 1,
              sku: 'CJB-01',
              key: 'key-CJB-01',
              prices: [
                {
                  id: '87877e65-8eef-4c89-a9f1-63f192d55725',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a1bc119d-a4f1-40ed-a249-12cd15e47d11',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1000,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '923fc31a-76ed-4322-a7e9-35fb757e1a95',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'fde44c7e-6a1d-4fbf-b647-f044c755e5bc',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 1750,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '69a7a387-b201-4d31-98ee-55cf837362b0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 17000,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cube_Jute_Basket-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
                    'en-US': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 96,
                version: 1,
                id: '0d975c2b-04d1-45ba-a190-d86498eaf0a6',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '73d89f07-87d2-4896-808b-aadb6e27f0ce',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '1f563787-d00c-41c1-b9fe-752f67037005',
        version: 50,
        versionModifiedAt: '2023-10-31T16:20:08.311Z',
        lastMessageSequenceNumber: 23,
        createdAt: '2023-05-01T20:26:52.213Z',
        lastModifiedAt: '2023-10-31T16:20:08.311Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: 'f372e4e3-4a11-469d-807a-d3622d00da99' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: { 'en-US': 'Ecru Double Bed', 'en-CA': 'Ecru Double Bed' },
            description: {
              'de-DE':
                'Ein Doppelbett mit Sofakopfteil ist ein einzigartiges und vielseitiges Möbelstück, das den Komfort eines Bettes mit der Funktionalität eines Sofas verbindet. Der Bettrahmen ist rechteckig und groß genug, um eine Standard-Doppelmatratze aufzunehmen. Das Kopfteil hat die Form eines Sofas, das oben am Bettrahmen befestigt ist. Das Kopfteil des Sofas bietet eine bequeme Rückenlehne zum Sitzen im Bett, um zu lesen, fernzusehen oder an einem Laptop zu arbeiten. Das Kopfteil des Sofas ist mit einem weichen und strapazierfähigen Stoff bezogen und bietet eine bequeme Sitzfläche. Insgesamt ist ein Queensize-Bett mit Sofa-Kopfteil ein praktisches und stilvolles Möbelstück, das jedem Schlafzimmer sowohl Komfort als auch Funktionalität verleiht.',
              'en-GB':
                'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
              'es-MX':
                '<p>Una cama de matrimonio con cabecero de sofá es un mueble único y versátil que combina la comodidad de una cama con la funcionalidad de un sofá. El marco de la cama es rectangular y lo suficientemente grande como para acomodar un colchón doble estándar. La cabecera tiene forma de sofá y se fija a la parte superior del marco de la cama. La cabecera del sofá proporciona un cómodo respaldo para sentarse en la cama a leer, mirar televisión o trabajar en una computadora portátil. La cabecera del sofá está tapizada con un tejido suave y duradero, lo que proporciona una cómoda superficie para sentarse. En general, una cama tamaño queen con cabecera de sofá es un mueble práctico y elegante que puede agregar comodidad y funcionalidad a cualquier dormitorio!</p>',
              'en-US':
                'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
              'en-CA':
                'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
            },
            categories: [
              {
                typeId: 'category',
                id: '3aaa8d77-50e0-4b92-81d2-3891e9a08cd4',
              },
              {
                typeId: 'category',
                id: '32244d72-5728-4808-93d4-a420eb9745d4',
              },
              {
                typeId: 'category',
                id: '776c30f5-87a5-4ca0-b759-41b72155fba9',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'ecru-double-bed',
              'en-US': 'ecru-double-bed',
              'de-DE': 'ecru-doppelbett',
              'es-MX': 'cama-doble-crudo',
            },
            masterVariant: {
              id: 1,
              sku: 'SQB-034',
              key: 'key-SQB-034',
              prices: [
                {
                  id: '8696a25f-2944-4a56-b817-55f1fbad1f75',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 89900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '9365f23d-1665-4c41-9b57-3416d9d788f4',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 89900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '031f76c6-f162-42b2-97bf-0d35383ec459',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 89900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'e7c93b98-5f2b-4be2-ab96-ae4960e0da23',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 157325,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '0513b4ff-c0a5-4336-af40-b387661df243',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 1528300,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ecru_Double_Bed-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Comes with pillow-top headboard\n- Assembly included',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '9daa635a-0bee-4069-90e8-ce0d4496988b',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: { 'en-US': 'Ecru Double Bed', 'en-CA': 'Ecru Double Bed' },
            description: {
              'de-DE':
                'Ein Doppelbett mit Sofakopfteil ist ein einzigartiges und vielseitiges Möbelstück, das den Komfort eines Bettes mit der Funktionalität eines Sofas verbindet. Der Bettrahmen ist rechteckig und groß genug, um eine Standard-Doppelmatratze aufzunehmen. Das Kopfteil hat die Form eines Sofas, das oben am Bettrahmen befestigt ist. Das Kopfteil des Sofas bietet eine bequeme Rückenlehne zum Sitzen im Bett, um zu lesen, fernzusehen oder an einem Laptop zu arbeiten. Das Kopfteil des Sofas ist mit einem weichen und strapazierfähigen Stoff bezogen und bietet eine bequeme Sitzfläche. Insgesamt ist ein Queensize-Bett mit Sofa-Kopfteil ein praktisches und stilvolles Möbelstück, das jedem Schlafzimmer sowohl Komfort als auch Funktionalität verleiht.',
              'en-GB':
                'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
              'es-MX':
                '<p>Una cama de matrimonio con cabecero de sofá es un mueble único y versátil que combina la comodidad de una cama con la funcionalidad de un sofá. El marco de la cama es rectangular y lo suficientemente grande como para acomodar un colchón doble estándar. La cabecera tiene forma de sofá y se fija a la parte superior del marco de la cama. La cabecera del sofá proporciona un cómodo respaldo para sentarse en la cama a leer, mirar televisión o trabajar en una computadora portátil. La cabecera del sofá está tapizada con un tejido suave y duradero, lo que proporciona una cómoda superficie para sentarse. En general, una cama tamaño queen con cabecera de sofá es un mueble práctico y elegante que puede agregar comodidad y funcionalidad a cualquier dormitorio!</p>',
              'en-US':
                'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
              'en-CA':
                'A double-sized bed with a sofa headboard is a unique and versatile piece of furniture that combines the comfort of a bed with the functionality of a sofa. The bed frame is rectangular and large enough to accommodate a standard double mattress. The headboard is in the form of a sofa, which is attached to the top of the bed frame. The sofa headboard provides a comfortable backrest for sitting up in bed to read, watch TV, or work on a laptop. The sofa headboard is upholstered in a soft and durable fabric, providing a comfortable seating surface. Overall, a queen bed with a sofa headboard is a practical and stylish piece of furniture that can add both comfort and functionality to any bedroom.',
            },
            categories: [
              {
                typeId: 'category',
                id: '3aaa8d77-50e0-4b92-81d2-3891e9a08cd4',
              },
              {
                typeId: 'category',
                id: '32244d72-5728-4808-93d4-a420eb9745d4',
              },
              {
                typeId: 'category',
                id: '776c30f5-87a5-4ca0-b759-41b72155fba9',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'ecru-double-bed',
              'en-US': 'ecru-double-bed',
              'de-DE': 'ecru-doppelbett',
              'es-MX': 'cama-doble-crudo',
            },
            masterVariant: {
              id: 1,
              sku: 'SQB-034',
              key: 'key-SQB-034',
              prices: [
                {
                  id: '8696a25f-2944-4a56-b817-55f1fbad1f75',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 89900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '9365f23d-1665-4c41-9b57-3416d9d788f4',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 89900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '031f76c6-f162-42b2-97bf-0d35383ec459',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 89900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'e7c93b98-5f2b-4be2-ab96-ae4960e0da23',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 157325,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '0513b4ff-c0a5-4336-af40-b387661df243',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 1528300,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ecru_Double_Bed-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Comes with pillow-top headboard\n- Assembly included',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '9daa635a-0bee-4069-90e8-ce0d4496988b',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '1f563787-d00c-41c1-b9fe-752f67037005',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        priceMode: 'Embedded',
        lastVariantId: 1,
      },
      {
        id: '1974de01-fc0c-4f15-9cd4-bbdb0de7dac7',
        version: 48,
        versionModifiedAt: '2023-12-08T22:02:53.124Z',
        lastMessageSequenceNumber: 21,
        createdAt: '2023-05-01T20:26:52.226Z',
        lastModifiedAt: '2023-12-08T22:02:53.124Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: 'f372e4e3-4a11-469d-807a-d3622d00da99' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Modern Black Coaster',
              'en-CA': 'Modern Black Coaster',
            },
            description: {
              'de-DE':
                'Ein runder schwarzer Untersetzer ist ein kleiner, flacher, scheibenförmiger Gegenstand, der unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Spritzern zu schützen. Der Untersetzer hat eine runde Form und eine solide schwarze Farbe, die ihm ein schlankes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, um dem Glas oder der Tasse einen rutschfesten Halt zu bieten. Die Kanten sind mit Ziernähten versehen, die den ästhetischen Reiz des Untersetzers noch verstärken. Insgesamt ist ein runder schwarzer Untersetzer ein funktionales und stilvolles Accessoire, das sich perfekt für jede Wohn- oder Büroumgebung eignet.',
              'en-GB':
                "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
              'es-MX':
                'Un posavasos negro redondo es un objeto pequeño y plano con forma de disco que se coloca debajo de un vaso o taza para proteger la superficie de una mesa u otros muebles de los anillos o derrames de agua. La montaña rusa tiene forma circular y un color negro sólido, lo que le da una apariencia elegante y minimalista. Su superficie es lisa para proporcionar un agarre antideslizante al vaso o taza. Los bordes incluyen una ornamentación de costuras, lo que aumenta el atractivo estético del posavasos. En general, un posavasos negro redondo es un accesorio funcional y elegante que es perfecto para cualquier hogar u oficina.',
              'en-US':
                "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
              'en-CA':
                "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
            },
            categories: [
              {
                typeId: 'category',
                id: '1690b904-a72f-41f7-aa45-97e6168349f2',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'modern-black-coaster',
              'en-US': 'modern-black-coaster',
              'de-DE': 'moderner-schwarzer-untersetzer',
              'es-MX': 'posavasos-negro-moderno',
            },
            masterVariant: {
              id: 1,
              sku: 'BCOAS-08',
              key: 'key-BCOAS-08',
              prices: [
                {
                  id: 'dd88de81-965b-450f-9648-c8aa92593926',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 1999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'b52f87ed-5fe0-4317-8b4a-cff39a90111e',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '02da194b-1f11-4874-8d87-602e9f90ecdb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '4bd0a806-7191-4295-af0a-cef4438371c9',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 3498,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '952ded23-8d99-4e2b-a4d9-52d5b8ef38e0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 33983,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Black_Coaster-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Black_Coaster-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Set includes 4 coasters' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '762e8e93-e4f1-45ab-90a7-59af3cd7bbe7',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Modern Black Coaster',
              'en-CA': 'Modern Black Coaster',
            },
            description: {
              'de-DE':
                'Ein runder schwarzer Untersetzer ist ein kleiner, flacher, scheibenförmiger Gegenstand, der unter ein Trinkglas oder eine Tasse gestellt wird, um die Oberfläche eines Tisches oder anderer Möbel vor Wasserringen oder Spritzern zu schützen. Der Untersetzer hat eine runde Form und eine solide schwarze Farbe, die ihm ein schlankes und minimalistisches Aussehen verleiht. Seine Oberfläche ist glatt, um dem Glas oder der Tasse einen rutschfesten Halt zu bieten. Die Kanten sind mit Ziernähten versehen, die den ästhetischen Reiz des Untersetzers noch verstärken. Insgesamt ist ein runder schwarzer Untersetzer ein funktionales und stilvolles Accessoire, das sich perfekt für jede Wohn- oder Büroumgebung eignet.',
              'en-GB':
                "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
              'es-MX':
                'Un posavasos negro redondo es un objeto pequeño y plano con forma de disco que se coloca debajo de un vaso o taza para proteger la superficie de una mesa u otros muebles de los anillos o derrames de agua. La montaña rusa tiene forma circular y un color negro sólido, lo que le da una apariencia elegante y minimalista. Su superficie es lisa para proporcionar un agarre antideslizante al vaso o taza. Los bordes incluyen una ornamentación de costuras, lo que aumenta el atractivo estético del posavasos. En general, un posavasos negro redondo es un accesorio funcional y elegante que es perfecto para cualquier hogar u oficina.',
              'en-US':
                "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
              'en-CA':
                "A round black coaster is a small, flat disc-shaped object, which is placed under a drinking glass or cup to protect the surface of a table or other furniture from water rings or spills. The coaster is circular in shape and has a solid black color, giving it a sleek and minimalist appearance. Its surface is smooth to provide a non-slip grip for the glass or cup. The edges include a stitching ornamentation, adding to the coaster's aesthetic appeal. Overall, a round black coaster is a functional and stylish accessory that is perfect for any home or office setting.",
            },
            categories: [
              {
                typeId: 'category',
                id: '1690b904-a72f-41f7-aa45-97e6168349f2',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'modern-black-coaster',
              'en-US': 'modern-black-coaster',
              'de-DE': 'moderner-schwarzer-untersetzer',
              'es-MX': 'posavasos-negro-moderno',
            },
            masterVariant: {
              id: 1,
              sku: 'BCOAS-08',
              key: 'key-BCOAS-08',
              prices: [
                {
                  id: 'dd88de81-965b-450f-9648-c8aa92593926',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 200000,
                    fractionDigits: 2,
                  },
                  customerGroup: {
                    typeId: 'customer-group',
                    id: '94ed8367-5775-4871-bb5c-1ff84cfb7183',
                  },
                },
                {
                  id: 'b52f87ed-5fe0-4317-8b4a-cff39a90111e',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 1999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '02da194b-1f11-4874-8d87-602e9f90ecdb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 1999,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '4bd0a806-7191-4295-af0a-cef4438371c9',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 3498,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '952ded23-8d99-4e2b-a4d9-52d5b8ef38e0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 33983,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Black_Coaster-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Black_Coaster-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Set includes 4 coasters' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '762e8e93-e4f1-45ab-90a7-59af3cd7bbe7',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: true,
        },
        key: '1974de01-fc0c-4f15-9cd4-bbdb0de7dac7',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '8c4c6c03-fa8f-4659-b230-8e0eb6a19f75',
        version: 52,
        versionModifiedAt: '2023-11-07T21:00:46.070Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.233Z',
        lastModifiedAt: '2023-11-07T21:00:46.070Z',
        lastModifiedBy: { isPlatformClient: true },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Comfort Coffee Mug',
              'en-CA': 'Comfort Coffee Mug',
            },
            description: {
              'de-DE':
                'Der Comfort Coffee Mug ist aus Keramik gefertigt. Das Design des Bechers soll das Halten und Trinken erleichtern, mit einem Griff auf einer Seite für bequemen Halt.\n\nDer Becher ist schlicht, aber sein grundlegendes Design ist im Allgemeinen einfach und funktional. Der Körper des Bechers hat oft glatte Seiten und eine breite Öffnung, die das Eingießen und Trinken von Kaffee erleichtert.\n\nDer Comfort Coffee Mug ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.\n\nInsgesamt ist der Comfort Coffee Mug ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Kaffeegenuss zu Hause oder am Arbeitsplatz eignet. Sein einfaches Design und seine Benutzerfreundlichkeit machen ihn zu einer beliebten Wahl für Kaffeeliebhaber aller Art.',
              'en-GB':
                'The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.\n\nThe mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.\n\nThe Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.',
              'es-MX':
                'La taza de café Comfort está fabricada en cerámica. El diseño de la taza está pensado para que sea fácil de sostener y beber, con un asa en un lado para un agarre cómodo.\n\nLa taza es sencilla, pero su diseño básico es generalmente sencillo y funcional. El cuerpo de la taza suele tener lados lisos, con una abertura amplia que facilita servir y beber café.\n\nLa taza de café Comfort es fácil de limpiar y mantener. Se puede lavar a mano o en lavavajillas y se debe secar bien para evitar que se formen manchas de agua o residuos.\n\nEn general, la Comfort Coffee Mug es un tipo de recipiente práctico y funcional ideal para disfrutar de una taza de café en casa o en el trabajo. Su diseño básico y facilidad de uso lo convierten en una opción popular para los amantes del café de todo tipo.',
              'en-US':
                'The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.\n\nThe mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.\n\nThe Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.',
              'en-CA':
                'The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.\n\nThe mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.\n\nThe Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.',
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'comfort-coffee-mug',
              'en-US': 'comfort-coffee-mug',
              'de-DE': 'komfort-kaffeetasse',
              'es-MX': 'taza-de-cafe-confort',
            },
            masterVariant: {
              id: 1,
              sku: 'CCM-089',
              key: 'key-CCM-089',
              prices: [
                {
                  id: 'b28c91a7-34ed-4055-9296-d8010666d77c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '4c7b21f3-e213-4318-a85e-5a18c5e246e5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c557d6f3-c501-4a79-9610-cfdd23dcbb68',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '655bf2c3-aae1-406b-bee2-304d4ed42a70',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 348,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '72fcdbf4-c575-4256-9e0a-18ffa86f022e',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 3383,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Comfort_Coffee_Mug-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Includes 1 mug\n- Dishwasher and microwave safe',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 2,
                id: '7efdfb8a-0785-4c73-b690-3c0a37d76ed4',
                channels: {
                  '03597822-d63c-4d23-ba0f-56780a87d3f3': {
                    isOnStock: true,
                    availableQuantity: 25,
                    version: 5,
                    id: '6878627d-d88c-431e-94fd-75599569830d',
                  },
                },
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Comfort Coffee Mug',
              'en-CA': 'Comfort Coffee Mug',
            },
            description: {
              'de-DE':
                'Der Comfort Coffee Mug ist aus Keramik gefertigt. Das Design des Bechers soll das Halten und Trinken erleichtern, mit einem Griff auf einer Seite für bequemen Halt.\n\nDer Becher ist schlicht, aber sein grundlegendes Design ist im Allgemeinen einfach und funktional. Der Körper des Bechers hat oft glatte Seiten und eine breite Öffnung, die das Eingießen und Trinken von Kaffee erleichtert.\n\nDer Comfort Coffee Mug ist leicht zu reinigen und zu pflegen. Es kann von Hand oder in der Spülmaschine gewaschen werden und sollte gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.\n\nInsgesamt ist der Comfort Coffee Mug ein praktisches und funktionelles Trinkgefäß, das sich ideal für den Kaffeegenuss zu Hause oder am Arbeitsplatz eignet. Sein einfaches Design und seine Benutzerfreundlichkeit machen ihn zu einer beliebten Wahl für Kaffeeliebhaber aller Art.',
              'en-GB':
                'The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.\n\nThe mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.\n\nThe Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.',
              'es-MX':
                'La taza de café Comfort está fabricada en cerámica. El diseño de la taza está pensado para que sea fácil de sostener y beber, con un asa en un lado para un agarre cómodo.\n\nLa taza es sencilla, pero su diseño básico es generalmente sencillo y funcional. El cuerpo de la taza suele tener lados lisos, con una abertura amplia que facilita servir y beber café.\n\nLa taza de café Comfort es fácil de limpiar y mantener. Se puede lavar a mano o en lavavajillas y se debe secar bien para evitar que se formen manchas de agua o residuos.\n\nEn general, la Comfort Coffee Mug es un tipo de recipiente práctico y funcional ideal para disfrutar de una taza de café en casa o en el trabajo. Su diseño básico y facilidad de uso lo convierten en una opción popular para los amantes del café de todo tipo.',
              'en-US':
                'The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.\n\nThe mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.\n\nThe Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.',
              'en-CA':
                'The Comfort Coffee Mug is made from ceramic. The design of the mug is intended to make it easy to hold and drink from, with a handle on one side for comfortable grip.\n\nThe mug is plain, but its basic design is generally simple and functional. The body of the mug is often smooth-sided, with a wide opening that makes it easy to pour and drink coffee.\n\nThe Comfort Coffee Mug is easy to clean and maintain. It can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Comfort Coffee Mug is a practical and functional type of drinking vessel that is ideal for enjoying a cup of coffee at home or at work. Its basic design and ease of use make it a popular choice for coffee lovers of all types.',
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'comfort-coffee-mug',
              'en-US': 'comfort-coffee-mug',
              'de-DE': 'komfort-kaffeetasse',
              'es-MX': 'taza-de-cafe-confort',
            },
            masterVariant: {
              id: 1,
              sku: 'CCM-089',
              key: 'key-CCM-089',
              prices: [
                {
                  id: 'b28c91a7-34ed-4055-9296-d8010666d77c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '4c7b21f3-e213-4318-a85e-5a18c5e246e5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c557d6f3-c501-4a79-9610-cfdd23dcbb68',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 199,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '655bf2c3-aae1-406b-bee2-304d4ed42a70',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 348,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '72fcdbf4-c575-4256-9e0a-18ffa86f022e',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 3383,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Comfort_Coffee_Mug-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Includes 1 mug\n- Dishwasher and microwave safe',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 2,
                id: '7efdfb8a-0785-4c73-b690-3c0a37d76ed4',
                channels: {
                  '03597822-d63c-4d23-ba0f-56780a87d3f3': {
                    isOnStock: true,
                    availableQuantity: 25,
                    version: 5,
                    id: '6878627d-d88c-431e-94fd-75599569830d',
                  },
                },
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '8c4c6c03-fa8f-4659-b230-8e0eb6a19f75',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: 'cc480596-205b-4813-8e21-38b79df785d7',
        version: 56,
        versionModifiedAt: '2023-10-26T17:21:47.655Z',
        lastMessageSequenceNumber: 25,
        createdAt: '2023-05-01T20:26:52.240Z',
        lastModifiedAt: '2023-10-26T17:21:47.655Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Ivory Lounge Chair',
              'en-CA': 'Ivory Lounge Chair',
            },
            description: {
              'de-DE':
                'Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.\n\nDie Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.\n\nInsgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.',
              'en-GB':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
              'es-MX':
                'Este sillón es un mueble atrevido y original que se inspira en los estilos eclécticos de los años 70. La silla tiene una forma redonda y circular, con un respaldo bajo y un asiento generosamente acolchado que proporciona un asiento cómodo durante largos períodos de tiempo.\n\nLos brazos de la silla son anchos y redondos, creando un espacio cómodo y de apoyo para que descanses los brazos mientras descansas.\n\nEn general, un sillón redondo inspirado en los años 70 es un mueble divertido y divertido que puede agregar un toque de estilo retro a cualquier habitación. Su forma redonda y su generoso acolchado lo convierten en un lugar cómodo y acogedor para descansar y relajarse.',
              'en-US':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
              'en-CA':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
            },
            categories: [
              {
                typeId: 'category',
                id: 'ec727120-b702-4284-bb10-94027ac7844a',
              },
              {
                typeId: 'category',
                id: '776c30f5-87a5-4ca0-b759-41b72155fba9',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'ivory-lounge-chair',
              'en-US': 'ivory-lounge-chair',
              'de-DE': 'elfenbein-lounge-stuhl',
              'es-MX': 'silln-marfil',
            },
            metaDescription: {
              'en-GB':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
              'de-DE':
                'Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.\n\nDie Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.\n\nInsgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.',
              'en-US':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
            },
            masterVariant: {
              id: 1,
              sku: 'ILC-01',
              key: 'key-ILC-01',
              prices: [
                {
                  id: '1a20adbb-2e88-411b-b881-df76deb6ad1c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 29900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c5acbd17-b452-4a0e-8530-2af02eb97a30',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 29900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '3743b8ad-5a4a-4390-808f-58cf37a1bb05',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 29900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'ec6a0b94-edab-48fa-b6fd-0880eaba69f3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 52325,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '93196156-9351-4eef-810b-41065e975cb0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 508300,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.3.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Dry clean only\n- Assembly included in delivery',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '32a5109f-75b6-45af-b307-73c0f39d1b19',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Ivory Lounge Chair',
              'en-CA': 'Ivory Lounge Chair',
            },
            description: {
              'de-DE':
                'Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.\n\nDie Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.\n\nInsgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.',
              'en-GB':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
              'es-MX':
                'Este sillón es un mueble atrevido y original que se inspira en los estilos eclécticos de los años 70. La silla tiene una forma redonda y circular, con un respaldo bajo y un asiento generosamente acolchado que proporciona un asiento cómodo durante largos períodos de tiempo.\n\nLos brazos de la silla son anchos y redondos, creando un espacio cómodo y de apoyo para que descanses los brazos mientras descansas.\n\nEn general, un sillón redondo inspirado en los años 70 es un mueble divertido y divertido que puede agregar un toque de estilo retro a cualquier habitación. Su forma redonda y su generoso acolchado lo convierten en un lugar cómodo y acogedor para descansar y relajarse.',
              'en-US':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
              'en-CA':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
            },
            categories: [
              {
                typeId: 'category',
                id: 'ec727120-b702-4284-bb10-94027ac7844a',
              },
              {
                typeId: 'category',
                id: '776c30f5-87a5-4ca0-b759-41b72155fba9',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'ivory-lounge-chair',
              'en-US': 'ivory-lounge-chair',
              'de-DE': 'elfenbein-lounge-stuhl',
              'es-MX': 'silln-marfil',
            },
            metaDescription: {
              'en-GB':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
              'de-DE':
                'Dieser Sessel ist ein kühnes und flippiges Möbelstück, das seine Inspiration aus den eklektischen Stilen der 1970er Jahre bezieht. Der Stuhl hat eine runde, kreisförmige Form mit einer niedrigen Rückenlehne und einer großzügig gepolsterten Sitzfläche, die für längere Zeit bequemen Sitz bietet.\n\nDie Armlehnen des Stuhls sind breit und rund und schaffen einen bequemen und stützenden Platz, an dem Sie Ihre Arme beim Faulenzen ausruhen können.\n\nInsgesamt ist ein von den 70er Jahren inspirierter runder Sessel ein verspieltes und lustiges Möbelstück, das jedem Raum einen Hauch von Retro-Flair verleihen kann. Seine runde Form und die großzügige Polsterung machen ihn zu einem komfortablen und einladenden Ort zum Faulenzen und Entspannen.',
              'en-US':
                "This arm chair is a bold and funky piece of furniture that takes its inspiration from the eclectic styles of the 1970s. The chair features a round, circular shape, with a low backrest and generously padded seat that provide comfortable seating for extended periods of time.\n\nThe arms of the chair are wide and round, creating a comfortable and supportive space for you to rest your arms while lounging.\n\nOverall, a 70's inspired round arm chair is a playful and fun piece of furniture that can add a touch of retro flair to any room. Its round shape and generous padding, make it a comfortable and inviting spot for lounging and relaxation.",
            },
            masterVariant: {
              id: 1,
              sku: 'ILC-01',
              key: 'key-ILC-01',
              prices: [
                {
                  id: '1a20adbb-2e88-411b-b881-df76deb6ad1c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 29900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'c5acbd17-b452-4a0e-8530-2af02eb97a30',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 29900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '3743b8ad-5a4a-4390-808f-58cf37a1bb05',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 29900,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'ec6a0b94-edab-48fa-b6fd-0880eaba69f3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 52325,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '93196156-9351-4eef-810b-41065e975cb0',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 508300,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.3.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: {
                    'en-GB':
                      '- Dry clean only\n- Assembly included in delivery',
                  },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '32a5109f-75b6-45af-b307-73c0f39d1b19',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'cc480596-205b-4813-8e21-38b79df785d7',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '7100c6c0-70a1-4a24-a0ed-cc31c236f165',
        version: 44,
        versionModifiedAt: '2023-10-26T17:21:47.524Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.240Z',
        lastModifiedAt: '2023-10-26T17:21:47.524Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Modern Ceramic Plate',
              'en-CA': 'Modern Ceramic Plate',
            },
            description: {
              'de-DE':
                'Ein Essteller aus Keramik ist ein klassisches und vielseitiges Geschirr, das zum Servieren einer Vielzahl von Mahlzeiten verwendet wird.\n\nDer Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen von Speisen zu verhindern.\n\nKeramikteller sind ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in ungezwungenen als auch in formellen Umgebungen verwendet werden und sind eine beliebte Wahl in Restaurants und Haushalten gleichermaßen.\n\nEssteller aus Keramik sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gewaschen werden.\n\nInsgesamt ist ein Keramikteller eine klassische und funktionale Wahl zum Servieren von Speisen. Seine Einfachheit und Haltbarkeit machen es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht es für eine Reihe von Anlässen geeignet.',
              'en-GB':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
              'es-MX':
                'Un plato llano de cerámica es un plato clásico y versátil que se utiliza para servir una variedad de comidas.\n\nEl plato tiene una superficie circular plana con un borde ligeramente elevado alrededor de los bordes para evitar que la comida se derrame.\n\nLos platos llanos de cerámica son ideales para servir una variedad de platos, incluidos platos principales, acompañamientos, ensaladas y postres. Se pueden utilizar tanto en entornos informales como formales, y son una opción popular tanto en restaurantes como en hogares.\n\nLos platos llanos de cerámica son duraderos y fáciles de limpiar, lo que los convierte en una opción práctica para el uso diario. Se pueden lavar en lavavajillas o lavar a mano con agua y jabón.\n\nEn general, un plato llano de cerámica es una opción clásica y funcional para servir comida. Su simplicidad y durabilidad lo convierten en un elemento básico en muchas cocinas y comedores, y su versatilidad lo hace adecuado para una variedad de ocasiones gastronómicas.',
              'en-US':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
              'en-CA':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
            },
            categories: [
              {
                typeId: 'category',
                id: '32c01c04-fd11-439c-a290-b243fe02dbbe',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'modern-ceramic-plate',
              'en-US': 'modern-ceramic-plate',
              'de-DE': 'moderne-keramikplatte',
              'es-MX': 'placa-ceramica-moderna',
            },
            metaDescription: {
              'en-GB':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
              'de-DE':
                'Ein Essteller aus Keramik ist ein klassisches und vielseitiges Geschirr, das zum Servieren einer Vielzahl von Mahlzeiten verwendet wird.\n\nDer Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen von Speisen zu verhindern.\n\nKeramikteller sind ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in ungezwungenen als auch in formellen Umgebungen verwendet werden und sind eine beliebte Wahl in Restaurants und Haushalten gleichermaßen.\n\nEssteller aus Keramik sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gewaschen werden.\n\nInsgesamt ist ein Keramikteller eine klassische und funktionale Wahl zum Servieren von Speisen. Seine Einfachheit und Haltbarkeit machen es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht es für eine Reihe von Anlässen geeignet.',
              'en-US':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
            },
            masterVariant: {
              id: 1,
              sku: 'MCP-01',
              key: 'key-MCP-01',
              prices: [
                {
                  id: '0c423cca-9985-413f-83fb-07e8bbc0c2fc',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '9da480db-7ce5-471c-88b4-730427193298',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '709e3d16-d8c2-426e-b8f1-6c45c9472f1d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'e8cb9b25-4ffe-48f3-a04d-5b91d8365099',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 523,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'f1e7b586-f42a-4e76-836e-fb18245cfa2f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 5083,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Ceramic_Plate-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Includes 1 plate' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '207c137d-d3c7-4423-8d28-37d2bd01f8c1',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Modern Ceramic Plate',
              'en-CA': 'Modern Ceramic Plate',
            },
            description: {
              'de-DE':
                'Ein Essteller aus Keramik ist ein klassisches und vielseitiges Geschirr, das zum Servieren einer Vielzahl von Mahlzeiten verwendet wird.\n\nDer Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen von Speisen zu verhindern.\n\nKeramikteller sind ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in ungezwungenen als auch in formellen Umgebungen verwendet werden und sind eine beliebte Wahl in Restaurants und Haushalten gleichermaßen.\n\nEssteller aus Keramik sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gewaschen werden.\n\nInsgesamt ist ein Keramikteller eine klassische und funktionale Wahl zum Servieren von Speisen. Seine Einfachheit und Haltbarkeit machen es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht es für eine Reihe von Anlässen geeignet.',
              'en-GB':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
              'es-MX':
                'Un plato llano de cerámica es un plato clásico y versátil que se utiliza para servir una variedad de comidas.\n\nEl plato tiene una superficie circular plana con un borde ligeramente elevado alrededor de los bordes para evitar que la comida se derrame.\n\nLos platos llanos de cerámica son ideales para servir una variedad de platos, incluidos platos principales, acompañamientos, ensaladas y postres. Se pueden utilizar tanto en entornos informales como formales, y son una opción popular tanto en restaurantes como en hogares.\n\nLos platos llanos de cerámica son duraderos y fáciles de limpiar, lo que los convierte en una opción práctica para el uso diario. Se pueden lavar en lavavajillas o lavar a mano con agua y jabón.\n\nEn general, un plato llano de cerámica es una opción clásica y funcional para servir comida. Su simplicidad y durabilidad lo convierten en un elemento básico en muchas cocinas y comedores, y su versatilidad lo hace adecuado para una variedad de ocasiones gastronómicas.',
              'en-US':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
              'en-CA':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
            },
            categories: [
              {
                typeId: 'category',
                id: '32c01c04-fd11-439c-a290-b243fe02dbbe',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'modern-ceramic-plate',
              'en-US': 'modern-ceramic-plate',
              'de-DE': 'moderne-keramikplatte',
              'es-MX': 'placa-ceramica-moderna',
            },
            metaDescription: {
              'en-GB':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
              'de-DE':
                'Ein Essteller aus Keramik ist ein klassisches und vielseitiges Geschirr, das zum Servieren einer Vielzahl von Mahlzeiten verwendet wird.\n\nDer Teller hat eine flache, runde Oberfläche mit einer leicht erhöhten Lippe an den Rändern, um ein Überschwappen von Speisen zu verhindern.\n\nKeramikteller sind ideal zum Servieren einer Vielzahl von Gerichten, darunter Vorspeisen, Beilagen, Salate und Desserts. Sie können sowohl in ungezwungenen als auch in formellen Umgebungen verwendet werden und sind eine beliebte Wahl in Restaurants und Haushalten gleichermaßen.\n\nEssteller aus Keramik sind langlebig und leicht zu reinigen, was sie zu einer praktischen Wahl für den täglichen Gebrauch macht. Sie können in der Spülmaschine oder von Hand mit Wasser und Seife gewaschen werden.\n\nInsgesamt ist ein Keramikteller eine klassische und funktionale Wahl zum Servieren von Speisen. Seine Einfachheit und Haltbarkeit machen es zu einem Grundnahrungsmittel in vielen Küchen und Esszimmern, und seine Vielseitigkeit macht es für eine Reihe von Anlässen geeignet.',
              'en-US':
                'A ceramic dinner plate is a classic and versatile dish that is used to serve a variety of meals.\n\nThe plate has a flat, circular surface with a slightly raised lip around the edges to prevent food from spilling over.\n\nCeramic dinner plates are ideal for serving a variety of dishes, including entrees, sides, salads, and desserts. They can be used in both casual and formal settings, and are a popular choice in restaurants and homes alike.\n\nCeramic dinner plates are durable and easy to clean, making them a practical choice for everyday use. They can be washed in a dishwasher or hand washed with soap and water.\n\nOverall, a ceramic dinner plate is a classic and functional choice for serving food. Its simplicity and durability make it a staple in many kitchens and dining rooms, and its versatility makes it suitable for a range of dining occasions.',
            },
            masterVariant: {
              id: 1,
              sku: 'MCP-01',
              key: 'key-MCP-01',
              prices: [
                {
                  id: '0c423cca-9985-413f-83fb-07e8bbc0c2fc',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '9da480db-7ce5-471c-88b4-730427193298',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '709e3d16-d8c2-426e-b8f1-6c45c9472f1d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'e8cb9b25-4ffe-48f3-a04d-5b91d8365099',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 523,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'f1e7b586-f42a-4e76-836e-fb18245cfa2f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 5083,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Ceramic_Plate-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Includes 1 plate' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '207c137d-d3c7-4423-8d28-37d2bd01f8c1',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '7100c6c0-70a1-4a24-a0ed-cc31c236f165',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '7c89c6bd-bbb9-454b-b5e5-fbb385e3d0ac',
        version: 58,
        versionModifiedAt: '2023-10-26T17:21:47.502Z',
        lastMessageSequenceNumber: 25,
        createdAt: '2023-05-01T20:26:52.243Z',
        lastModifiedAt: '2023-10-26T17:21:47.502Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: { 'en-US': 'Evergreen Candle', 'en-CA': 'Evergreen Candle' },
            description: {
              'de-DE':
                'Der Kerzenhalter hat ein schlichtes, rustikales Design mit einer hohen, schlanken Form, die an einen Baumstamm erinnert. Es kann auch mit kleinen immergrünen Zweigen, Beeren und Tannenzapfen dekoriert werden, um ein natürlicheres und organischeres Aussehen zu schaffen.\n\nWenn die Kerze angezündet wird, wirft sie einen warmen und gemütlichen Schein und schafft eine festliche und einladende Atmosphäre in jedem Raum. Der immergrüne Duft des Kerzenhalters kann auch durch die Wärme der Kerze verstärkt werden und erfüllt den Raum mit dem natürlichen Duft von Kiefer und Holz.\n\nInsgesamt ist ein immergrüner Kerzenhalter während der Ferienzeit eine charmante und rustikale Ergänzung für jedes Zuhause. Seine natürlichen Materialien und Erdtöne können dazu beitragen, eine warme und einladende Atmosphäre zu schaffen, während sein einfaches, aber elegantes Design jedem Raum einen Hauch von Natur verleiht.',
              'en-GB':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
              'es-MX':
                'El candelabro presenta un diseño sencillo y rústico con una forma alta y esbelta que recuerda al tronco de un árbol. También se puede decorar con pequeñas ramas de hoja perenne, bayas y piñas para crear una apariencia más natural y orgánica.\n\nCuando se enciende la vela, emitirá un brillo cálido y acogedor, creando un ambiente festivo y acogedor en cualquier habitación. El aroma siempre verde del candelabro también puede realzarse con el calor de la vela, llenando la habitación con la fragancia natural del pino y la madera.\n\nEn general, un candelabro de hoja perenne es una adición encantadora y rústica a cualquier hogar durante la temporada navideña. Sus materiales naturales y tonos tierra pueden ayudar a crear una atmósfera cálida y acogedora, mientras que su diseño simple pero elegante puede agregar un toque de naturaleza a cualquier habitación.',
              'en-US':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
              'en-CA':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'evergreen-candle',
              'en-US': 'evergreen-candle',
              'de-DE': 'immergrne-kerze',
              'es-MX': 'vela-perenne',
            },
            metaDescription: {
              'en-GB':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
              'de-DE':
                'Der Kerzenhalter hat ein schlichtes, rustikales Design mit einer hohen, schlanken Form, die an einen Baumstamm erinnert. Es kann auch mit kleinen immergrünen Zweigen, Beeren und Tannenzapfen dekoriert werden, um ein natürlicheres und organischeres Aussehen zu schaffen.\n\nWenn die Kerze angezündet wird, wirft sie einen warmen und gemütlichen Schein und schafft eine festliche und einladende Atmosphäre in jedem Raum. Der immergrüne Duft des Kerzenhalters kann auch durch die Wärme der Kerze verstärkt werden und erfüllt den Raum mit dem natürlichen Duft von Kiefer und Holz.\n\nInsgesamt ist ein immergrüner Kerzenhalter während der Ferienzeit eine charmante und rustikale Ergänzung für jedes Zuhause. Seine natürlichen Materialien und Erdtöne können dazu beitragen, eine warme und einladende Atmosphäre zu schaffen, während sein einfaches, aber elegantes Design jedem Raum einen Hauch von Natur verleiht.',
              'en-US':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
            },
            masterVariant: {
              id: 1,
              sku: 'EC-0993',
              key: 'key-EC-0993',
              prices: [
                {
                  id: 'ae495277-9f43-4660-a0a4-e80993cb3150',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '32a27f5b-939e-4030-9f19-e16203cc6f6c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '10cb11c9-ee5c-471c-bd87-ffb52f987ab1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '2e40c387-14e4-4789-bd79-3e355d234a21',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 523,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '732fd79c-10d8-4619-ae6f-de6cfdd6ec4f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 5083,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.3.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 99,
                version: 3,
                id: '5f590765-fcc8-4f80-b80e-6cc42d333f6b',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: { 'en-US': 'Evergreen Candle', 'en-CA': 'Evergreen Candle' },
            description: {
              'de-DE':
                'Der Kerzenhalter hat ein schlichtes, rustikales Design mit einer hohen, schlanken Form, die an einen Baumstamm erinnert. Es kann auch mit kleinen immergrünen Zweigen, Beeren und Tannenzapfen dekoriert werden, um ein natürlicheres und organischeres Aussehen zu schaffen.\n\nWenn die Kerze angezündet wird, wirft sie einen warmen und gemütlichen Schein und schafft eine festliche und einladende Atmosphäre in jedem Raum. Der immergrüne Duft des Kerzenhalters kann auch durch die Wärme der Kerze verstärkt werden und erfüllt den Raum mit dem natürlichen Duft von Kiefer und Holz.\n\nInsgesamt ist ein immergrüner Kerzenhalter während der Ferienzeit eine charmante und rustikale Ergänzung für jedes Zuhause. Seine natürlichen Materialien und Erdtöne können dazu beitragen, eine warme und einladende Atmosphäre zu schaffen, während sein einfaches, aber elegantes Design jedem Raum einen Hauch von Natur verleiht.',
              'en-GB':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
              'es-MX':
                'El candelabro presenta un diseño sencillo y rústico con una forma alta y esbelta que recuerda al tronco de un árbol. También se puede decorar con pequeñas ramas de hoja perenne, bayas y piñas para crear una apariencia más natural y orgánica.\n\nCuando se enciende la vela, emitirá un brillo cálido y acogedor, creando un ambiente festivo y acogedor en cualquier habitación. El aroma siempre verde del candelabro también puede realzarse con el calor de la vela, llenando la habitación con la fragancia natural del pino y la madera.\n\nEn general, un candelabro de hoja perenne es una adición encantadora y rústica a cualquier hogar durante la temporada navideña. Sus materiales naturales y tonos tierra pueden ayudar a crear una atmósfera cálida y acogedora, mientras que su diseño simple pero elegante puede agregar un toque de naturaleza a cualquier habitación.',
              'en-US':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
              'en-CA':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
            },
            categories: [
              {
                typeId: 'category',
                id: 'b24b4306-081f-4492-b7ef-bb8b3c95922d',
              },
              {
                typeId: 'category',
                id: 'f2f04e5c-92a2-4fc8-a661-8f3c9b8ba79c',
              },
              {
                typeId: 'category',
                id: '15c976ab-a89e-4a62-b31b-5ef13cefedf1',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'evergreen-candle',
              'en-US': 'evergreen-candle',
              'de-DE': 'immergrne-kerze',
              'es-MX': 'vela-perenne',
            },
            metaDescription: {
              'en-GB':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
              'de-DE':
                'Der Kerzenhalter hat ein schlichtes, rustikales Design mit einer hohen, schlanken Form, die an einen Baumstamm erinnert. Es kann auch mit kleinen immergrünen Zweigen, Beeren und Tannenzapfen dekoriert werden, um ein natürlicheres und organischeres Aussehen zu schaffen.\n\nWenn die Kerze angezündet wird, wirft sie einen warmen und gemütlichen Schein und schafft eine festliche und einladende Atmosphäre in jedem Raum. Der immergrüne Duft des Kerzenhalters kann auch durch die Wärme der Kerze verstärkt werden und erfüllt den Raum mit dem natürlichen Duft von Kiefer und Holz.\n\nInsgesamt ist ein immergrüner Kerzenhalter während der Ferienzeit eine charmante und rustikale Ergänzung für jedes Zuhause. Seine natürlichen Materialien und Erdtöne können dazu beitragen, eine warme und einladende Atmosphäre zu schaffen, während sein einfaches, aber elegantes Design jedem Raum einen Hauch von Natur verleiht.',
              'en-US':
                'The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.\n\nWhen the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.\n\nOverall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.',
            },
            masterVariant: {
              id: 1,
              sku: 'EC-0993',
              key: 'key-EC-0993',
              prices: [
                {
                  id: 'ae495277-9f43-4660-a0a4-e80993cb3150',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '32a27f5b-939e-4030-9f19-e16203cc6f6c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '10cb11c9-ee5c-471c-bd87-ffb52f987ab1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '2e40c387-14e4-4789-bd79-3e355d234a21',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 523,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '732fd79c-10d8-4619-ae6f-de6cfdd6ec4f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 5083,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.2.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Evergreen_Candle-1.3.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 99,
                version: 3,
                id: '5f590765-fcc8-4f80-b80e-6cc42d333f6b',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '7c89c6bd-bbb9-454b-b5e5-fbb385e3d0ac',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
      {
        id: '42cddfe4-23ec-493a-9ea9-9a425c2da9cc',
        version: 44,
        versionModifiedAt: '2023-10-26T17:21:47.715Z',
        lastMessageSequenceNumber: 19,
        createdAt: '2023-05-01T20:26:52.253Z',
        lastModifiedAt: '2023-10-26T17:21:47.715Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: { typeId: 'user', id: '4051df61-3ed3-4518-85f2-2d6a0725a007' },
        },
        createdBy: { isPlatformClient: true },
        productType: {
          typeId: 'product-type',
          id: 'dd91d8b5-50a1-4aa5-b35d-c78b9784ffae',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Harmony Drinking Glass',
              'en-CA': 'Harmony Drinking Glass',
            },
            description: {
              'de-DE':
                'Das Trinkglas Harmony wurde entwickelt, um Wasser oder andere Getränke zu halten. Es hat eine Kapazität von etwa 8 bis 12 Unzen.\n\nDas Design des Wasserglases soll das Halten und Trinken einfach und bequem machen. Es hat einen geraden Körper mit glatten Seiten und einer dicken, stabilen Basis, die für Gleichgewicht und Stabilität sorgt. Der Rand des Glases ist leicht gewölbt oder abgerundet, was das Trinken angenehm macht.\n\nDas Trinkglas Harmony kann für eine Vielzahl von Getränken verwendet werden, darunter Wasser, Saft, Eistee und andere alkoholfreie Getränke.\n\nDie Trinkgläser sind im Allgemeinen leicht zu reinigen und zu pflegen. Sie können von Hand oder in der Spülmaschine gewaschen werden und sollten gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.\n\nInsgesamt ist das Harmony Trinkglas ein schlichter und funktionaler Trinkglastyp, der sich ideal für den täglichen Gebrauch eignet. Sein einfaches Design und seine Vielseitigkeit machen es zu einer beliebten Wahl für lässige und formelle Umgebungen.',
              'en-GB':
                'The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.\n\nThe design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.\n\nThe Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.\n\nThe drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.',
              'es-MX':
                'El vaso Harmony está diseñado para contener agua u otras bebidas. Tiene una capacidad de alrededor de 8 a 12 onzas.\n\nEl diseño del vaso de agua está pensado para que sea fácil y cómodo de sostener y beber. Tiene un cuerpo recto y de lados lisos con una base gruesa y estable que proporciona equilibrio y estabilidad. El borde del vaso es ligeramente curvado o redondeado, lo que hace que sea cómodo beber.\n\nEl vaso Harmony se puede utilizar para una variedad de bebidas, como agua, jugo, té helado y otras bebidas no alcohólicas.\n\nLos vasos para beber suelen ser fáciles de limpiar y mantener. Se pueden lavar a mano o en lavavajillas y se deben secar bien para evitar que se formen manchas de agua o residuos.\n\nEn general, el vaso Harmony es un tipo de vaso sencillo y funcional, ideal para el uso diario. Su diseño básico y su versatilidad lo convierten en una opción popular tanto para entornos informales como formales.',
              'en-US':
                'The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.\n\nThe design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.\n\nThe Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.\n\nThe drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.',
              'en-CA':
                'The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.\n\nThe design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.\n\nThe Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.\n\nThe drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.',
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'harmony-drinking-glass',
              'en-US': 'harmony-drinking-glass',
              'de-DE': 'harmonie-trinkglas',
              'es-MX': 'vaso-armona',
            },
            masterVariant: {
              id: 1,
              sku: 'HDG-02',
              key: 'key-HDG-02',
              prices: [
                {
                  id: '5965b9f7-f734-421a-bcbd-f416a1a5a0e5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a0898a04-eb5b-4301-a9aa-978d45fb8fd1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 2499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '32262d7c-81ad-41fd-9dfb-5fe8e6baf7bb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '6921dd69-12f3-4efe-b233-de21adc20dd1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 4373,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '40b4acdf-4907-4ab1-b10a-a1de1a47f4f9',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 42483,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Harmony_Drinking_Glass-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Set includes 6 glasses' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '0ccb9eeb-b45c-4b6a-8e87-db996a1c72c5',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Harmony Drinking Glass',
              'en-CA': 'Harmony Drinking Glass',
            },
            description: {
              'de-DE':
                'Das Trinkglas Harmony wurde entwickelt, um Wasser oder andere Getränke zu halten. Es hat eine Kapazität von etwa 8 bis 12 Unzen.\n\nDas Design des Wasserglases soll das Halten und Trinken einfach und bequem machen. Es hat einen geraden Körper mit glatten Seiten und einer dicken, stabilen Basis, die für Gleichgewicht und Stabilität sorgt. Der Rand des Glases ist leicht gewölbt oder abgerundet, was das Trinken angenehm macht.\n\nDas Trinkglas Harmony kann für eine Vielzahl von Getränken verwendet werden, darunter Wasser, Saft, Eistee und andere alkoholfreie Getränke.\n\nDie Trinkgläser sind im Allgemeinen leicht zu reinigen und zu pflegen. Sie können von Hand oder in der Spülmaschine gewaschen werden und sollten gründlich getrocknet werden, um Wasserflecken oder Rückstände zu vermeiden.\n\nInsgesamt ist das Harmony Trinkglas ein schlichter und funktionaler Trinkglastyp, der sich ideal für den täglichen Gebrauch eignet. Sein einfaches Design und seine Vielseitigkeit machen es zu einer beliebten Wahl für lässige und formelle Umgebungen.',
              'en-GB':
                'The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.\n\nThe design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.\n\nThe Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.\n\nThe drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.',
              'es-MX':
                'El vaso Harmony está diseñado para contener agua u otras bebidas. Tiene una capacidad de alrededor de 8 a 12 onzas.\n\nEl diseño del vaso de agua está pensado para que sea fácil y cómodo de sostener y beber. Tiene un cuerpo recto y de lados lisos con una base gruesa y estable que proporciona equilibrio y estabilidad. El borde del vaso es ligeramente curvado o redondeado, lo que hace que sea cómodo beber.\n\nEl vaso Harmony se puede utilizar para una variedad de bebidas, como agua, jugo, té helado y otras bebidas no alcohólicas.\n\nLos vasos para beber suelen ser fáciles de limpiar y mantener. Se pueden lavar a mano o en lavavajillas y se deben secar bien para evitar que se formen manchas de agua o residuos.\n\nEn general, el vaso Harmony es un tipo de vaso sencillo y funcional, ideal para el uso diario. Su diseño básico y su versatilidad lo convierten en una opción popular tanto para entornos informales como formales.',
              'en-US':
                'The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.\n\nThe design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.\n\nThe Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.\n\nThe drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.',
              'en-CA':
                'The Harmony Drinking Glass is designed to hold water or other beverages. It has a capacity of around 8 to 12 ounces.\n\nThe design of the water glass is intended to make it easy and comfortable to hold and drink from. It has a straight, smooth-sided body with a thick, stable base that provides balance and stability. The rim of the glass is slightly curved or rounded, making it comfortable to drink from.\n\nThe Harmony Drinking Glass can be used for a variety of beverages, including water, juice, iced tea, and other non-alcoholic drinks.\n\nThe drinking glasses are generally easy to clean and maintain. They can be washed by hand or in a dishwasher, and should be dried thoroughly to prevent water spots or residue from forming.\n\nOverall, the Harmony Drinking Glass is a simple and functional type of drinking glass that is ideal for everyday use. Its basic design and versatility make it a popular choice for both casual and formal settings.',
            },
            categories: [
              {
                typeId: 'category',
                id: '8d3fc327-a3e3-4376-9d98-b7f2071c5bdb',
              },
              {
                typeId: 'category',
                id: '0ccaeb00-73e4-4dc0-a46f-9a585730306f',
              },
              {
                typeId: 'category',
                id: '6174c78e-1e40-499b-a3b9-1d6a30ca6b5b',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-GB': 'harmony-drinking-glass',
              'en-US': 'harmony-drinking-glass',
              'de-DE': 'harmonie-trinkglas',
              'es-MX': 'vaso-armona',
            },
            masterVariant: {
              id: 1,
              sku: 'HDG-02',
              key: 'key-HDG-02',
              prices: [
                {
                  id: '5965b9f7-f734-421a-bcbd-f416a1a5a0e5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: 'a0898a04-eb5b-4301-a9aa-978d45fb8fd1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'GBP',
                    centAmount: 2499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '32262d7c-81ad-41fd-9dfb-5fe8e6baf7bb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2499,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '6921dd69-12f3-4efe-b233-de21adc20dd1',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'CAD',
                    centAmount: 4373,
                    fractionDigits: 2,
                  },
                },
                {
                  id: '40b4acdf-4907-4ab1-b10a-a1de1a47f4f9',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'MXN',
                    centAmount: 42483,
                    fractionDigits: 2,
                  },
                },
              ],
              images: [
                {
                  url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Harmony_Drinking_Glass-1.1.jpeg',
                  label: '',
                  dimensions: { w: 0, h: 0 },
                },
              ],
              attributes: [
                {
                  name: 'productspec',
                  value: { 'en-GB': '- Set includes 6 glasses' },
                },
              ],
              assets: [],
              availability: {
                isOnStock: true,
                availableQuantity: 100,
                version: 1,
                id: '0ccb9eeb-b45c-4b6a-8e87-db996a1c72c5',
              },
            },
            variants: [],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: '42cddfe4-23ec-493a-9ea9-9a425c2da9cc',
        taxCategory: {
          typeId: 'tax-category',
          id: 'f07b4dfa-32cd-4456-8b49-d211e798425d',
        },
        lastVariantId: 1,
      },
    ],
  },
  statusCode: 200,
};
export const useSampler = () => {
  const { samplerURL } = useApplicationContext<{ samplerURL: string }>(
    (context: any) => context.environment
  );

  const getData = async (entity: string): Promise<SampleDataResult> => {
    const response = await fetch(`${samplerURL}${entity}`, {
      headers: {
        'Access-Control-Allow-Origin': '',
      },
    });
    const result = await response.json();
    return result.body;
    // // @ts-ignore
    // return dummy.body;
  };

  return {
    getData,
  };
};
