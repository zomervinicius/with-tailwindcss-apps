import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ramo from '../images/ramo.png'

const api = 'https://crudcrud.com/api/9a17ed1777a1472dbc80a4c01ddb1f20'

const products = [
  {
    nome: 'Cuscuzeiro 14 Preto C/Tampa De Vidro',
    linkProduto:
      'https://www.amazon.com.br/dp/B07TK5Q7M8/?coliid=IFA59NRJYYGD8&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71DE-6LNPoL._AC_SL1500_.jpg',
    preco: 69,
  },
  {
    nome: 'Kit Potes de Plástico Hermético, Redondo, 4 unidades',
    linkProduto:
      'https://www.amazon.com.br/dp/B07LC6189D/?coliid=I1FGMPE6Z9Y8GY&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/61ecJ487YgL._AC_SL1200_.jpg',
    preco: 32,
  },
  {
    nome: 'Espátula Com Cabeça de Silicone e Cabo em Inox',
    linkProduto:
      'https://www.amazon.com.br/dp/B076JKY1DD/?coliid=I1Y019C2JGF14H&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/31rcmsJpYgL._AC_SL1000_.jpg',
    preco: 33,
  },
  {
    nome: 'Sanremo 237 Balde Oval Plástico 14L Plástico',
    linkProduto:
      'https://www.amazon.com.br/dp/B0779N39CK/?coliid=I2USPYPRYHDXDM&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it_im&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51vBLsk7itL._AC_SL1500_.jpg',
    preco: 35,
  },
  {
    nome: 'Conjunto 6 Copos 300ml Oca Nadir',
    linkProduto:
      'https://www.amazon.com.br/dp/B076MFY1Q7/?coliid=I39N3N9YH3OOEW&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51mK2g6PA3L._AC_SL1200_.jpg',
    preco: 37,
  },
  {
    nome: 'Suporte para Rolo Papel Toalha, Cromado',
    linkProduto:
      'https://www.amazon.com.br/dp/B077BPLB82/?coliid=I2TH3B3X7MD83Z&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/614H+0wMu9L._AC_SL1500_.jpg',
    preco: 37,
  },
  {
    nome: 'Balde 10 litros Retrátil Verde Esmeralda',
    linkProduto:
      'https://www.amazon.com.br/dp/B07JC15JBW/?coliid=IVMOIM663N5NE&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71ND8Qe85FL._AC_SL1500_.jpg',
    preco: 38,
  },
  {
    nome: 'Escorredor Pratos Secador Louça Inox Utensilho Cozinha Copos  ',
    linkProduto:
      'https://www.amazon.com.br/dp/B083Y44VF8/?coliid=I3KAVNCYEIOKIW&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/41JuwBNP1zL._AC_.jpg',
    preco: 39,
  },
  {
    nome: 'Cuscuzeiro 14 Preto C/Tampa De Vidro Dona Chefa Preto Pequeno ',
    linkProduto:
      'https://www.amazon.com.br/dp/B005T641PA/?coliid=IY52EZ0VADP47&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51m0N101CaL._AC_SL1200_.jpg',
    preco: 46,
  },
  {
    nome: 'kit 2 luva modelo bico de pato para tirar assadeira do forno',
    linkProduto:
      'https://www.amazon.com.br/dp/B09RG7BK55/?coliid=I10VP1HVVOQI73&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51C9mD26YDL._AC_SL1200_.jpg',
    preco: 47,
  },
  {
    nome: 'Conjunto 3 Formas Redondas De Metal Com Fundo Removível',
    linkProduto:
      'https://www.amazon.com.br/dp/B09HHN5PXG/?coliid=I1EVSZYA84ATAC&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/61UcmNTE22L._AC_SL1200_.jpg',
    preco: 51
  },
  {
    nome: 'Conjunto de Limpeza Multiuso 5 Peças',
    linkProduto: 'https://www.amazon.com.br/dp/B0877QXJXK/?coliid=I1RV47STP0ORP0&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71g5PDGK48L._AC_SL1500_.jpg',
    preco: 50
  },
  {
    nome: 'Assadeira Funda de Alumínio com Revestimento Interno Antiaderente Tramontina Brasil Vermelho',
    linkProduto: 'https://www.amazon.com.br/dp/B076KNDJSV/?coliid=IAUUENB1RUKEH&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71PW-mjGyHL._AC_SL1500_.jpg',
    preco: 52
  },
  {
    nome: 'Batedor 32,4 cm Aço Inox Marffim Tramontina',
    linkProduto: 'https://www.amazon.com.br/dp/B086YHYJPB/?coliid=IK1NS9YOJTPMJ&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/31iqGYF1kkL._AC_SL1200_.jpg',
    preco: 53
  },
  {
    nome: 'Jarra de Vidro Com Alça e Tampa Hermética Bronze Removível em Silicone e Aço Inoxidável, 1,3 Litros',
    linkProduto: 'https://www.amazon.com.br/dp/B07PX381GK/?coliid=I5W7Z1NULQB4I&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/61Ag0lQ8A3L._AC_SL1500_.jpg',
    preco: 59,
  },
  {
    nome: 'Frigideira Funda Tramontina 24 cm 2,2 L ',
    linkProduto: 'https://www.amazon.com.br/dp/B089ZSV7RR/?coliid=I7QUCB463UO9D&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51m5H-q93OL._AC_SL1200_.jpg',
    preco: 69
  },
  {
    nome: 'Conjunto de 4 Descansos de Panela de Bambu Redondo',
    linkProduto: 'https://www.amazon.com.br/dp/B0B1P7BBKY/?coliid=I3CRWPGGTVYKJ9&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/61ECYD135yL._AC_SL1000_.jpg',
    preco: 73
  },
  {
    nome: 'Panela Montreal 18 cm de Alumínio com Revestimento Antiaderente',
    linkProduto: 'https://www.amazon.com.br/dp/B0874652VD/?coliid=I19HCH3XYV9291&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/712Czobrd7L._AC_SL1500_.jpg',
    preco: 73
  },
  {
    nome: 'lixeira 5 Litros, Inox ',
    linkProduto: 'https://www.amazon.com.br/dp/B076B95YMM/?coliid=I2FXI68XLZJ5SS&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/41d+gWhUpKL._AC_SL1000_.jpg',
    preco: 89
  },
  {
    nome: 'Kit Potes de Plástico Hermético, 10 unidades',
    linkProduto: 'https://www.amazon.com.br/dp/B0784CLYGQ/?coliid=I301VFME0MHD6N&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51bOq7rNvhL._AC_SL1000_.jpg',
    preco: 119
  },
  {
    nome: 'Kit 4 Toalhas de Rosto Ótima Absorção 76x48cm',
    linkProduto: 'https://www.amazon.com.br/dp/B09Q7PRXNT/?coliid=IXM5A9P92PRCH&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71z5M8-MzTL._AC_SL1200_.jpg',
    preco: 76
  },
  {
    nome: 'Jogo de Facas 9 Peças Tramontina',
    linkProduto: 'https://www.amazon.com.br/dp/B07WR4TP9W/?coliid=I2K5ZF8KSL07OA&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51pY9X7O5sL._AC_.jpg',
    preco: 79
  },
  {
    nome: ' Kit 3 Potes de Vidro Marinex Vap 500ml Tampa Cores Sortidas',
    linkProduto: 'https://www.amazon.com.br/dp/B08YM26VKP/?coliid=I1AHB9Z32AGH96&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51CLAXxp-iL._AC_SL1000_.jpg',
    preco: 79
  },
  {
    nome: 'Assadeira Retangular Marinex linha Seletta 3,5 litros',
    linkProduto: 'https://www.amazon.com.br/dp/B076X65F6L/?coliid=I23NJOGCKXCUD8&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/41onAV3UaTL._AC_SL1185_.jpg',
    preco: 82
  },
  {
    nome: 'Liquidificador Mondial, Turbo Power 550W, 220V, Preto, 1,6L - L-99 FB',
    linkProduto: 'https://www.amazon.com.br/dp/B07QK91PTZ/?coliid=I123SKWKD1LYC3&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/81s9CRAW+9L._AC_SL1500_.jpg',
    preco: 84
  },
  {
    nome: 'BLACK+DECKER Ferro de Passar a Vapor com Base Antiaderente',
    linkProduto: 'https://www.amazon.com.br/dp/B07WCQ4V8H/?coliid=IQXBEX03WBY1P&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71qLokyzDpL._AC_SL1500_.jpg',
    preco: 101
  },
  {
    nome: 'Forma para Bolo de Cerâmica, 23cm, 1,8 Litros, Preto, Ceraflame',
    linkProduto: 'https://www.amazon.com.br/dp/B076VTY8KG/?coliid=I10246GQ2032OY&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it_im&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71PfPxGJsKL._AC_SL1500_.jpg',
    preco: 104
  },
  {
    nome: 'Kit 4 Toalhas de Banho Banhão Gigante Berlim 75x150cm',
    linkProduto: 'https://www.amazon.com.br/dp/B09GCV38VY/?coliid=I11HNSEVC4WI43&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71hsCm0VMIL._AC_SL1000_.jpg',
    preco: 107
  },
  {
    nome: 'Kit 6 Potes de Vidro Marinex Vap 300ml Tampa Cores Sortidas',
    linkProduto: 'https://www.amazon.com.br/dp/B08YMC5VLR/?coliid=I1FL4B3FGUDL59&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51AZgYMG9IL._AC_SL1000_.jpg',
    preco: 109
  },
  {
    nome: 'Kit Potes de Vidro Hermético, 4 unidades',
    linkProduto: 'https://www.amazon.com.br/dp/B07CG8YFXJ/?coliid=I377QLA09XE5PK&colid=1XI6HXWB0T2LJ&ref_=lv_ov_lig_dp_it&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71qwQqaCAkL._AC_SL1500_.jpg',
    preco: 119
  },
  {
    nome: 'KIT DE 6 POTES DE MANTIMENTOS DE 200ML COM TAMPA DE BAMBU',
    linkProduto: 'https://www.amazon.com.br/dp/B09VLGWW6L/?coliid=I3P29OM3EV3T3K&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/61dhoJgweeL._AC_SL1000_.jpg',
    preco: 79
  },
  {
    nome: 'Kit 6 Potes Tampa Hermético Porta Alimentos Mantimentos Armário Cozinha',
    linkProduto: 'https://www.amazon.com.br/dp/B097V2LB18/?coliid=I1Q6UP2X6DTTC2&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51z0lMFnm4S._AC_.jpg',
    preco: 134
  },
  {
    nome: 'Tramontina Profissional Frigideira com Revestimento Interno de Antiaderente',
    linkProduto: 'https://www.amazon.com.br/dp/B076MBCQXM/?coliid=I192GHCF5H8FAZ&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71YIUgO0wcL._AC_SL1500_.jpg',
    preco: 125
  },
  {
    nome: 'Aspirador de Pó Mondial, Turbo Cycle 1100W, 220V, Vermelho/Preto - AP-36',
    linkProduto: 'https://www.amazon.com.br/dp/B07JFSM214/?coliid=I18QNRWTWC7DDX&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/61-VwiJpvzL._AC_SL1500_.jpg',
    preco: 149
  },
  {
    nome: 'Panela de Pressão Tramontina Vancouver 20582620 4,5L Preta',
    linkProduto: 'https://www.amazon.com.br/dp/B076H7QYCH/?coliid=I1RP6IP1LZH176&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/81poJB-TJ7S._AC_SL1500_.jpg',
    preco: 198
  },
  {
    nome: 'Conjunto de Assadeiras de Vidro com Tampa 6 Peças - Marinex',
    linkProduto: 'https://www.amazon.com.br/dp/B0867LM89N/?coliid=I3PW8IHY5JIGUJ&colid=1XI6HXWB0T2LJ&psc=1&ref_=lv_ov_lig_dp_it_im',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51wQ2UujUnL._AC_SL1000_.jpg',
    preco: 179
  },
  {
    nome: 'Tábua de Corte Gourmet de Bambu Ecokitchen para Carnes, Legumes, Vegetais, Frutas e Queijo',
    linkProduto: 'https://www.amazon.com.br/Gourmet-Ecokitchen-Mimo-Style-BM1750/dp/B079YZRQTG/ref=sr_1_15?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=37DOGHON56SWK&keywords=tabua%2Bde%2Bcorte%2Bde%2Bmadeira&qid=1669591573&qu=eyJxc2MiOiIyLjk2IiwicXNhIjoiMi4xMiIsInFzcCI6IjEuNTAifQ%3D%3D&s=kitchen&sprefix=tabua%2Bde%2Bcorte%2Bde%2Bmadeir%2Ckitchen%2C209&sr=1-15&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51DpG-eNHWL._AC_SL1000_.jpg',
    preco: 58
  },
  {
    nome: 'Conjunto Kit De Utensílios De Cozinha 10 Peças Silicone Inox ',
    linkProduto: 'https://www.amazon.com.br/Conjunto-Utens%C3%ADlios-Cozinha-Pe%C3%A7as-Silicone/dp/B07W3XTM9Y/ref=sr_1_13?keywords=kit+espatula+de+silicone&qid=1669591914&qu=eyJxc2MiOiI0LjQ0IiwicXNhIjoiMy43MiIsInFzcCI6IjEuODkifQ%3D%3D&s=kitchen&sprefix=espatulas+%2Ckitchen%2C224&sr=1-13&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/51+7N6sPtqL._AC_SL1000_.jpg',
    preco: 108
  },
  {
    nome: 'Conjunto de Banheiro White 2 Peças, Acompanha Porta Sabonete Líquido (380ml)',
    linkProduto: 'https://www.amazon.com.br/Banheiro-Bambu-White-Bh20101-Mimo/dp/B08GCTJB1H/ref=d_pd_sbs_sccl_2_3/147-7194335-6359423?pd_rd_w=JXUO9&content-id=amzn1.sym.f14d3066-f640-490b-be63-642232e30730&pf_rd_p=f14d3066-f640-490b-be63-642232e30730&pf_rd_r=68F47WTHF8HQNP547QD9&pd_rd_wg=KTQYI&pd_rd_r=c2c204fa-1d98-4080-bbe4-c0412d9a06af&pd_rd_i=B08GCTJB1H&psc=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/31JQLGr-IDL._AC_SL1000_.jpg',
    preco: 73
  },
  {
    nome: 'Travessa Retangular Rasa Oxford Cookware Refratárias Branco ',
    linkProduto: 'https://www.amazon.com.br/Travessa-Retangular-Oxford-Cookware-009622/dp/B0784V289X/ref=sr_1_26?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=90NLR6TBZ5T6&keywords=travessa%2Bporcelana&qid=1669593114&qu=eyJxc2MiOiI2LjIxIiwicXNhIjoiNS45MCIsInFzcCI6IjUuMDYifQ%3D%3D&sprefix=travessa%2Bporcelan%2Caps%2C233&sr=8-26&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/41uhpcZ1lzL._AC_SL1000_.jpg',
    preco: 199
  },
  {
    nome: 'Cabide, pacote com 20 cabides de madeira maciça',
    linkProduto: 'https://www.amazon.com.br/SONGMICS-Cabides-unidades-acabamento-UCRW001-20/dp/B00TPABCH6/ref=d_coffee_espresso_home_sccl_3_3/147-7194335-6359423?pd_rd_w=N4x4j&content-id=amzn1.sym.4cfe2d17-1eb6-47d3-8fdb-a01bd3f60828&pf_rd_p=4cfe2d17-1eb6-47d3-8fdb-a01bd3f60828&pf_rd_r=P6WNRP6G493J98WXPBGW&pd_rd_wg=A1iMX&pd_rd_r=600d8fbb-7952-425c-8c2f-fb5b3d61f454&pd_rd_i=B00TPABCH6&th=1',
    fonteDaImagem: 'https://m.media-amazon.com/images/I/71nkZPX-JrL._AC_SL1500_.jpg',
    preco: 151
  },
  {
    nome: '',
    linkProduto: '',
    fonteDaImagem: '',
    preco: 10,
  },
  
];


const updateProducts = async () => {
  const response = await axios.put(api,{
    products
  })
  console.log('response', response)
}







const Home: NextPage = () => {
  const [items, setItems] = useState(products)
  useEffect(() => {
// createProducts()
// getProducts()
}, [])

const createProducts = async () => {
  const response = await axios.post(`${api}/tesst`,{
    products
  })
  console.log('response', response)
}

const itemUrl = '/tesst/6383fc7c23685e03e8b9085e'

const getProducts = async () => {
  const response = await axios.get(`${api}${itemUrl}`)
  console.log('response', response.data.products)
  setItems(response.data.products)
}

const bought = async (prodName) => {
  if (confirm('Você realmente adquiriu esse produto? O produto sairá da lista quando confirmar')) {
    const updatedItems = items.map(obj => {
        if (obj.nome === prodName) {
          return {...obj, adquirido: true};
        }
        return obj;
      })
      console.log('updatedItems', updatedItems)
    setItems(updatedItems)
    const response = await axios.put(`${api}${itemUrl}`, {updatedItems
    })
    // console.log('response', response)
} else {
  // Do nothing!
  console.log('Thing was not saved to the database.');
}
}
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2"
    >
      <Head>
        <title>Chá de panela - Jess & Vini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-7xl  mt-10"
        style={{color: '#6b7b55',
         fontFamily: 'Alex Brush'}}>
          Chá da Jéssica
        </h1>

        <p className="mt-5 text-5xl"
        style={{
          fontFamily: 'Alex Brush',
          color: '#6b7b55'
        }}>
         Jess vai casar!
        </p>
         <Image
                  src={ramo}
                  className="h-full w-full object-contain"
                  style={{height: 100,
                  }}
                />
      <span>Os produtos são ilustrativos, podem ser comprados tanto na Amazon como em outra loja de sua preferência. Pedimos que ao comprar clique em "já adquiri" para o produto sair da lista.</span>
       <div >
      <div className="mx-auto max-w-2xl mt-10 lg:max-w-7xl lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.filter(item => !item.adquirido).map((product) => (
            <div className="group relative">
               <a href={product.linkProduto}
                 target={'_blank'}
               >
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none">
                <img
                  src={product.fonteDaImagem}
                  className="h-full w-full object-contain"
                  style={{height: 200,
                  }}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                   
                      <span aria-hidden="true" />
                      {product.nome}
              
                  </h3>
                </div>
              </div>
               </a>
               <p className="text-xl text-gray-900">Preço: R${product.preco}</p>
                 <a href={product.linkProduto} 
                 target={'_blank'}
                 style={{backgroundColor: '#f90'}}
                 className="px-4 py-2 font-semibold text-sm  text-white rounded-full shadow-sm mr-3 mt-3">Ir para o site</a>
              <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm mt-3" onClick={() => bought(product.nome)}>Já adquiri</button>
            
            </div>
          ))}
        </div>
      </div>
    </div>
      </main>
      

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito com amor por Vini e Jess
        </a>
      </footer>
    </div>
  )
}

export default Home
