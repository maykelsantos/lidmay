(function () {
  "use strict";
  var S = window.SITE;
  var page = document.body.dataset.page || "";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- ícones ---------- */
  var I = {
    rocket: '<path d="M5 19c.5-3 2-4 4-4M14 5c3-1.5 5-1.5 6-1 .5 1 .5 3-1 6l-5 5-4-4 4-6z"/><path d="M9 15l-3 .5L5 19l3.5-1 .5-3zM15.5 8.5h.01"/>',
    code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01M12 7h5M12 17h5"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    chat: '<path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9.5h8M8 12.5h5"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5l-9.5 9.5a2.1 2.1 0 0 1-3-3L16.5 8.5"/><path d="M14.5 6.5L17 4l3 3-2.5 2.5"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    wa: '<path d="M3.5 20.5l1.3-4.6A8.5 8.5 0 1 1 8 19.3l-4.5 1.2z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2L9 8.5z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    insta: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  };
  function icon(n, cls) {
    return '<svg class="ico ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[n] || "") + "</svg>";
  }
  function esc(t) {
    return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  // placeholders entre [colchetes] ganham destaque visível
  function ph(t) {
    return esc(t).replace(/\[[^\]]+\]/g, function (m) { return '<span class="placeholder">' + m + "</span>"; });
  }

  function waLink(msg) {
    if (!S.whatsapp) return "contato.html";
    return "https://wa.me/" + S.whatsapp + "?text=" + encodeURIComponent(msg || "Olá! Vim pelo site e gostaria de conversar sobre o meu negócio.");
  }

  var logo =
    '<svg class="logo__mark" viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0EA5FF"/><stop offset="1" stop-color="#8B5CF6"/></linearGradient></defs>' +
    '<path d="M6 9l13-5v30l12 6-13 5L6 38z" fill="url(#lg)"/><path d="M22 14l12-5 8 4v22l-8 4-12-6 10-5V19l-10 3z" fill="url(#lg)" opacity=".92"/></svg>';

  /* ---------- cabeçalho e rodapé ---------- */
  var nav = [
    ["index.html", "Início", "home"],
    ["solucoes.html", "Soluções", "solucoes"],
    ["sobre.html", "Sobre", "sobre"],
    ["contato.html", "Contato", "contato"],
  ];
  var header = $("#header");
  if (header) {
    header.innerHTML =
      '<header class="site-header"><div class="container site-header__in">' +
      '<a class="logo" href="index.html" aria-label="' + esc(S.marca.nome) + ' — início">' + logo + '<span class="logo__txt">' + esc(S.marca.nome) + "</span></a>" +
      '<nav class="nav" id="nav" aria-label="Principal">' +
      nav.map(function (n) {
        return '<a href="' + n[0] + '"' + (n[2] === page ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
      }).join("") +
      '<a class="btn btn--primary nav__cta" href="' + waLink() + '"' + (S.whatsapp ? ' target="_blank" rel="noopener"' : "") + ">Falar com a gente</a></nav>" +
      '<button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>' +
      "</div></header>";
    var burger = $("#burger"), navEl = $("#nav");
    burger.addEventListener("click", function () {
      var open = navEl.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open);
      document.body.classList.toggle("no-scroll", open);
    });
    $$("a", navEl).forEach(function (a) {
      a.addEventListener("click", function () {
        navEl.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.classList.remove("no-scroll");
      });
    });
  }

  var footer = $("#footer");
  if (footer) {
    var contatos = [];
    if (S.whatsapp) contatos.push('<a href="' + waLink() + '" target="_blank" rel="noopener">' + icon("wa") + " WhatsApp</a>");
    else contatos.push('<span>' + icon("wa") + ' <span class="placeholder">[WhatsApp]</span></span>');
    if (S.email) contatos.push('<a href="mailto:' + esc(S.email) + '">' + icon("mail") + " " + esc(S.email) + "</a>");
    else contatos.push('<span>' + icon("mail") + ' <span class="placeholder">[e-mail]</span></span>');
    if (S.instagram) contatos.push('<a href="https://instagram.com/' + esc(S.instagram.replace("@", "")) + '" target="_blank" rel="noopener">' + icon("insta") + " " + esc(S.instagram) + "</a>");
    footer.innerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<div class="site-footer__top">' +
      '<div><a class="logo logo--light" href="index.html">' + logo + '<span class="logo__txt">' + esc(S.marca.nome) + "</span></a>" +
      '<p class="site-footer__lead">' + esc(S.marca.slogan) + ".</p></div>" +
      '<div><h4>Navegar</h4><ul>' + nav.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h4>Soluções</h4><ul>' + S.frentes.map(function (f) { return '<li><a href="solucoes.html#' + f.id + '">' + esc(f.titulo) + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h4>Contato</h4><ul class="site-footer__contact">' + contatos.map(function (c) { return "<li>" + c + "</li>"; }).join("") +
      "<li>" + icon("pin") + " " + ph(S.regiao) + "</li></ul></div></div>" +
      '<div class="site-footer__bottom"><span>© ' + new Date().getFullYear() + " " + esc(S.marca.nome) + ". Todos os direitos reservados.</span>" +
      '<span class="mono">v.prévia</span></div></div></footer>';
  }

  // botão fixo de contato
  var fab = document.createElement("a");
  fab.className = "fab";
  fab.href = waLink();
  if (S.whatsapp) { fab.target = "_blank"; fab.rel = "noopener"; }
  fab.innerHTML = icon("wa") + "<span>" + (S.whatsapp ? "Chamar no WhatsApp" : "Falar com a gente") + "</span>";
  document.body.appendChild(fab);

  /* ---------- renderizadores ---------- */
  var R = {
    frentes: function () {
      return S.frentes.map(function (f) {
        return '<article class="card reveal"><div class="card__top"><span class="card__ico">' + icon(f.icone) + '</span><span class="mono card__n">' + f.n + "</span></div>" +
          "<h3>" + esc(f.titulo) + "</h3><p>" + esc(f.resumo) + "</p>" +
          '<ul class="ticks">' + f.itens.map(function (i) { return "<li>" + icon("check") + esc(i) + "</li>"; }).join("") + "</ul>" +
          '<a class="card__link" href="solucoes.html#' + f.id + '">Ver detalhes ' + icon("arrow") + "</a></article>";
      }).join("");
    },
    situacoes: function () {
      return S.situacoes.map(function (s) {
        return '<div class="swap reveal"><div class="swap__a"><span class="mono">problema</span><p>' + esc(s.problema) + "</p></div>" +
          '<span class="swap__arrow">' + icon("arrow") + '</span><div class="swap__b"><span class="mono">solução</span><p>' + esc(s.solucao) + "</p></div></div>";
      }).join("");
    },
    passos: function () {
      return S.passos.map(function (p) {
        return '<li class="step reveal"><span class="step__n mono">' + p.n + "</span><h3>" + esc(p.titulo) + "</h3><p>" + esc(p.texto) + "</p></li>";
      }).join("");
    },
    pilares: function () {
      return S.pilares.map(function (p) {
        return '<div class="pillar reveal"><span class="pillar__ico">' + icon(p.icone) + "</span><h3>" + esc(p.titulo) + "</h3><p>" + esc(p.texto) + "</p></div>";
      }).join("");
    },
    ticker: function () {
      var words = ["Sites institucionais", "Lojas virtuais", "Sistemas personalizados", "Aplicativos", "Hospedagem", "Servidores", "Redes", "Integrações", "Automações", "Digitalização de processos"];
      var one = words.map(function (w) { return "<span>" + w + "</span>"; }).join("");
      return '<div class="ticker__track">' + one + one + "</div>";
    },
    fundadores: function () {
      return S.fundadores.map(function (f) {
        return '<article class="person reveal"><div class="person__avatar" aria-hidden="true">' + icon("code") + "</div><h3>" + ph(f.nome) + '</h3><p class="mono person__role">' + ph(f.cargo) + "</p><p>" + ph(f.texto) + "</p></article>";
      }).join("");
    },
    solucoesDetalhe: function () {
      return S.frentes.map(function (f, i) {
        return '<section class="solution ' + (i % 2 ? "solution--alt" : "") + '" id="' + f.id + '"><div class="container solution__in">' +
          '<div class="solution__head reveal"><span class="mono solution__n">' + f.n + "</span><span class=\"card__ico card__ico--lg\">" + icon(f.icone) + "</span>" +
          "<h2>" + esc(f.titulo) + "</h2><p class=\"lead\">" + esc(f.detalhe) + "</p></div>" +
          '<div class="solution__body reveal"><h3 class="mono label">o que entregamos</h3><ul class="ticks ticks--lg">' +
          f.itens.map(function (x) { return "<li>" + icon("check") + esc(x) + "</li>"; }).join("") + "</ul>" +
          '<div class="solution__cols"><div><h3 class="mono label">para quem é</h3><p>' + esc(f.paraQuem) + '</p></div>' +
          '<div class="solution__ex"><h3 class="mono label">exemplo de problema</h3><p>' + esc(f.exemplo) + "</p></div></div></div></div></section>";
      }).join("");
    },
    contatoOpcoes: function () {
      return '<option value="">Selecione…</option>' + S.opcoesContato.map(function (o) { return "<option>" + esc(o) + "</option>"; }).join("");
    },
    canais: function () {
      var out = [];
      out.push('<div class="channel">' + icon("wa") + "<div><strong>WhatsApp</strong>" + (S.whatsapp ? '<a href="' + waLink() + '" target="_blank" rel="noopener">Chamar agora</a>' : '<span class="placeholder">[número de WhatsApp]</span>') + "</div></div>");
      out.push('<div class="channel">' + icon("mail") + "<div><strong>E-mail</strong>" + (S.email ? '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>" : '<span class="placeholder">[e-mail da empresa]</span>') + "</div></div>");
      out.push('<div class="channel">' + icon("pin") + "<div><strong>Onde atuamos</strong><span>" + ph(S.regiao) + "</span></div></div>");
      out.push('<div class="channel">' + icon("clock") + "<div><strong>Atendimento</strong><span>" + ph(S.horario) + "</span></div></div>");
      return out.join("");
    },
  };
  $$("[data-render]").forEach(function (el) {
    var fn = R[el.dataset.render];
    if (fn) el.innerHTML = fn();
  });
  $$("[data-nome]").forEach(function (el) { el.textContent = S.marca.nome; });
  $$("[data-link='wa']").forEach(function (a) {
    a.href = waLink();
    if (S.whatsapp) { a.target = "_blank"; a.rel = "noopener"; }
  });
  $$("[data-icon]").forEach(function (el) { el.innerHTML = icon(el.dataset.icon); });
  if (S.marca.nomeProvisorio) {
    var tag = $("#draft-tag");
    if (tag) tag.hidden = false;
  }

  /* ---------- painel animado do hero ---------- */
  var painel = $("#painel");
  if (painel) {
    painel.innerHTML = S.painel.map(function (p, i) {
      return '<li class="row" data-i="' + i + '"><span class="row__tag mono">' + esc(p.tag) + "</span>" +
        '<div class="row__txt"><span class="row__a">' + esc(p.problema) + '</span><span class="row__b">' + esc(p.solucao) + "</span></div>" +
        '<span class="row__chip mono"><i></i><b>em aberto</b></span></li>';
    }).join("");
    var rows = $$(".row", painel), counter = $("#painel-count");
    var solved = 0;
    function setCount() { if (counter) counter.textContent = solved + "/" + rows.length + " resolvidos"; }
    function solve(i) {
      rows[i].classList.add("is-solved");
      $("b", rows[i]).textContent = "resolvido";
      solved++; setCount();
    }
    function resetAll() {
      rows.forEach(function (r) { r.classList.remove("is-solved"); $("b", r).textContent = "em aberto"; });
      solved = 0; setCount();
    }
    if (reduce) {
      rows.forEach(function (r, i) { solve(i); });
    } else {
      setCount();
      var step = 0;
      setInterval(function () {
        if (step < rows.length) { solve(step); step++; }
        else if (step === rows.length) { step++; }
        else { resetAll(); step = 0; }
      }, 1500);
    }
  }

  /* ---------- formulário de contato ---------- */
  var form = $("#form-contato");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var msg = "Olá! Meu nome é " + d.get("nome") + (d.get("negocio") ? ", do negócio " + d.get("negocio") : "") + ". " +
        (d.get("interesse") ? "Tenho interesse em: " + d.get("interesse") + ". " : "") +
        (d.get("mensagem") ? "\n" + d.get("mensagem") : "");
      var out = $("#form-aviso");
      if (S.whatsapp) {
        window.open(waLink(msg), "_blank", "noopener");
        out.hidden = true;
      } else {
        out.hidden = false;
        out.innerHTML = '<strong>Quase lá!</strong> O WhatsApp da empresa ainda não foi configurado nesta prévia. Quando estiver, este formulário abre a conversa já preenchida. Mensagem montada:<pre>' + esc(msg) + "</pre>";
      }
    });
  }

  /* ---------- aparecer ao rolar ---------- */
  var rev = $$(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting || en.boundingClientRect.top < 0) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    rev.forEach(function (el) { io.observe(el); });
  } else {
    rev.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
