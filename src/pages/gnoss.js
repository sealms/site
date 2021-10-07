var resourceAnalitics = {
    config: function (type) {
        resource_id = $('input#recurso_id').val();

        analiticsTriples = [];
        analiticsTriples.push(analitics.getTriple("http://www.w3.org/1999/02/22-rdf-syntax-ns#type", type));
        analiticsTriples.push(analitics.getTriple("http://rdfs.org/sioc/ns#Item", resource_id));
    },
    sendAnaliticsLoad: function () {
        var that = this;
        var parameters = window.location.search;
        
        if (document.referrer != "" && document.referrer != document.location.href && parameters != "") {
            if (parameters.indexOf('created') > 0) {
                that.resourceCreated();
            }
            else if (parameters.indexOf('modified') > 0) {
                that.resourceCreated();
            }
            else if (parameters.indexOf('versioned') > 0) {
                that.resourceCreated();
            }
        }
        that.resourceVisited();
    },
    resourceVisited: function () {
        this.config("resourceVisited");
        //var date = new Date($('input#inpt_serverTime').val());
        var date = analitics.getRealDate(new Date())
        var referer_url = document.referrer;
        analiticsTriples.push(analitics.getTriple("date", date));
        analiticsTriples.push(analitics.getTriple("referer_url", referer_url));
        analitics.send(analiticsTriples);
    },
    resourceDownloaded: function () {
        this.config("resourceDownloaded");
        var date = analitics.getRealDate(new Date())
        analiticsTriples.push(analitics.getTriple("date", date));
        analitics.send(analiticsTriples);
    },
    resourcePlayed: function () {
        this.config("resourcePlayed");
        var date = analitics.getRealDate(new Date())
        analiticsTriples.push(analitics.getTriple("date", date));
        analitics.send(analiticsTriples);
    },
    resourceCreated: function () {
        this.config("resourceCreated");
        var date = new Date($('input#recurso_modification_date').val());
        analiticsTriples.push(analitics.getTriple("date", date));
        analitics.send(analiticsTriples);
    },
    resourceModified: function () {
        this.config("resourceModified");
        var date = new Date($('input#recurso_modification_date').val());
        analiticsTriples.push(analitics.getTriple("date", date));
        analitics.send(analiticsTriples);
    },
    resourceVersioned: function () {
        this.config("resourceVersioned");
        var date = new Date($('input#recurso_modification_date').val());
        analiticsTriples.push(analitics.getTriple("date", date));
        analitics.send(analiticsTriples);
    },
    resourceDeleted: function () {
        this.config("resourceDeleted");
        var date = analitics.getRealDate(new Date())
        analiticsTriples.push(analitics.getTriple("date", date));
        analitics.send(analiticsTriples);
    }
}

var commentsAnalitics = {
    config: function (type) {
        resource_id = $('input#recurso_id').val();
        date = analitics.getRealDate(new Date());

        analiticsTriples = [];
        analiticsTriples.push(analitics.getTriple("actionType", type));
        analiticsTriples.push(analitics.getTriple("resource_id", resource_id));
        analiticsTriples.push(analitics.getTriple("date", date));
    },
    commentCreated: function (comment_id) {
        this.config("commentCreated");
        analiticsTriples.push(analitics.getTriple("comment_id", comment_id));
        analitics.send(analiticsTriples);
    },
    commentModified: function (comment_id) {
        this.config("commentModified");
        analiticsTriples.push(analitics.getTriple("comment_id", comment_id));
        analitics.send(analiticsTriples);
    },
    commentDeleted: function (comment_id) {
        this.config("commentDeleted");
        analiticsTriples.push(analitics.getTriple("comment_id", comment_id));
        analitics.send(analiticsTriples);
    }
}

var searchAnalitics = {
    config: function (type) {
        date = analitics.getRealDate(new Date());

        analiticsTriples = [];
        analiticsTriples.push(analitics.getTriple("actionType", type));
        analiticsTriples.push(analitics.getTriple("date", date));
    },
    facetsSearchAdd: function (facet) {
        this.config("facetsSearchAdd");
        analiticsTriples.push(analitics.getTriple("facet", facet));
        analitics.send(analiticsTriples);
    },
    facetsSearchRemove: function (facet) {
        this.config("facetsSearchRemove");
        analiticsTriples.push(analitics.getTriple("facet", facet));
        analitics.send(analiticsTriples);
    },
    freeTextSearch: function (search_text) {
        this.config("freeTextSearch");
        analiticsTriples.push(analitics.getTriple("search_text", search_text));
        analitics.send(analiticsTriples);
    },
    pageSearch: function (num_page) {
        this.config("pageSearch");
        analiticsTriples.push(analitics.getTriple("num_page", num_page));
        analitics.send(analiticsTriples);
    }
}

var shareAnalitics = {
    config: function (type) {
        //community = $('input#inpt_proyID').val();
        resource_id = $('input#recurso_id').val();
        date = analitics.getRealDate(new Date());

        analiticsTriples = [];
        analiticsTriples.push(analitics.getTriple("actionType", type));
        //analiticsTriples.push(analitics.getTriple("community", community));
        analiticsTriples.push(analitics.getTriple("resource_id", resource_id));
        analiticsTriples.push(analitics.getTriple("date", date));;
    },
    shareCommunity: function () {
        this.config("shareCommunity");
        analitics.send(analiticsTriples);
    },
    sharePersonalSpace: function () {
        this.config("sharePersonalSpace");
        analitics.send(analiticsTriples);
    },
    shareSocialNetwork: function (social_network) {
        this.config("shareSocialNetwork");
        analiticsTriples.push(analitics.getTriple("social_network", social_network));
        analitics.send(analiticsTriples);
    }
}

var voteAnalitics = {
    config: function (type) {
        //community = $('input#inpt_proyID').val();
        resource_id = $('input#recurso_id').val();
        date = analitics.getRealDate(new Date());

        analiticsTriples = [];
        analiticsTriples.push(analitics.getTriple("actionType", type));
        //analiticsTriples.push(analitics.getTriple("community", community));
        analiticsTriples.push(analitics.getTriple("resource_id", resource_id));
        analiticsTriples.push(analitics.getTriple("date", date));;
    },
    voteResource: function (vote) {
        this.config("voteResource");
        analiticsTriples.push(analitics.getTriple("vote", vote));
        analitics.send(analiticsTriples);
    }
}


var analitics = {
    init: function () {
        this.checkCookieIdentifier();
        this.setDiffHours();
		this.graph = $_GET("graph");
		this.key = $_GET("key");

        body = $('body');
        if (body.hasClass('fichaComunidad')) {
            resourceAnalitics.sendAnaliticsLoad();

            $('a.linkDescargaFichero').click(function () {
                resourceAnalitics.resourceDownloaded();
            });
            $('.redesSocialesCompartir li a').click(function () {
                shareAnalitics.shareSocialNetwork($(this).attr('title'));
            });
        }
        else if (body.hasClass('listadoComunidad')) {
            var parameters = window.location.search;
            if (document.referrer != "" && document.referrer != document.location.href && parameters != "") {
                if (parameters.indexOf('search=') > 0) {
                    searchAnalitics.freeTextSearch(parameters.substring(7));
                }
            }
        }
    },
    getTriple: function (property, value) {
        var s = "<" + document.location.origin + document.location.pathname + "###EventID###>";
        var p = ' <' + property + '>';
        if (property.indexOf("http") != 0) {
            p = " <http://gnoss.com/ontology.owl#" + property + ">";
        }
        var o = " \"" + value + "\".";
        return s + p + o;
    },
    send: function (analiticsTriples) {
        var community = $('input#inpt_proyID').val();
        var user_id = $('input#inpt_usuarioID').val();
        var cookie_user = analitics.getCookieIdentifier();

        analiticsTriples.push(this.getTriple("community_id", community));
        analiticsTriples.push(this.getTriple("user_id", user_id));
        analiticsTriples.push(this.getTriple("cookie_user", cookie_user));

        var listaTriples = "";
        $.each(analiticsTriples, function (index, value) {
            listaTriples += value + "\n";
        });
		
		var eventoID = this.guidGenerator();
		listaTriples = listaTriples.replace(/###EventID###/gi, "?eventID=" + eventoID);
		if(this.graph != null && this.graph != ""){
			$.post("https://data.afel-project.eu/api/dataset/" + this.graph + "?key=" + this.key, { rdf: listaTriples });
		}
    },
	guidGenerator: function() {
		var S4 = function () {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		};
		return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
	},
	getRealDate: function (date) {
	    /*if (diffHours != 0) {
	        date.setHours(date.getHours() - diffHoras);
	    }*/
	    return date.toISOString();
	},
	setDiffHours: function() {
	    /*var fechaServidor = new Date($('#inpt_serverTime').val());
	    var fechaCliente = new Date();

	    var diffMinutos = parseInt((fechaServidor.getTime() / (1000 * 60)) - (fechaCliente.getTime() / (1000 * 60)));
	    diffHoras = diffMinutos / 60;

	    var resto = diffMinutos % 60;
	    if (resto / 60 > 0.5) {
	        if (diffHoras > 0) {
	            diffHoras = diffHoras + 1;
	        }
	        else {
	            diffHoras = diffHoras - 1;
	        }
	    }*/
	},
	setCookieIdentifier : function(cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "AFEL_U_ID=" + cvalue + "; " + expires + ';path=/';
    },
	getCookieIdentifier: function () {
        var name = "AFEL_U_ID=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    checkCookieIdentifier : function () {
        var AFEL_U_ID = this.getCookieIdentifier();
        if (AFEL_U_ID == "") {
            AFEL_U_ID = guidGenerator();
        }
        this.setCookieIdentifier(AFEL_U_ID);
    }
}

var diffHours = 0;


$(document).ready(function() {
    analitics.init();
});
