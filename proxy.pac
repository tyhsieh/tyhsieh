var direct = 'DIRECT';

var http_proxy = 'SOCKS 127.0.0.1:2002; SOCKS4 127.0.0.1:2002';
var lab_http_proxy = 'SOCKS 127.0.0.1:2003; SOCKS4 127.0.0.1:2003';

var nwave_bastion_forward_list = [
	"*.wireless.nwave.noaa.gov",
	"*.erav.nwave.noaa.gov",
	"ib.*.nwave.noaa.gov",
	"infoblox*.ford.nwave.noaa.gov",
	"awx.*.nwave.noaa.gov",
	"auto-conf.*.nwave.noaa.gov",
	"gnat.*.nwave.noaa.gov",
	"stfw*.*.nwave.noaa.gov",
	"cnfw*.*.nwave.noaa.gov",
	"clfw*.*.nwave.noaa.gov",
	"lgsv*.*.nwave.noaa.gov",
	"fmsv.ctc.nwave.noaa.gov",
	"fw1-clpk.erav.nwave.noaa.gov",
	"fw1-denv.erav.nwave.noaa.gov",
	// fw1-clpk.erav.nwave.noaa.gov
	"198.18.8.66",
	// fw1-denv.erav.nwave.noaa.gov
 	"198.18.9.67",
	// fw1-denv.erav.nwave.noaa.gov
	"198.18.9.76",
	// mc1.denv.nwav.noaa.gov
	"198.18.9.82",
	// stfw01.ford.nwave.noaa.gov
	"198.18.36.86",
	"github.nwave.noaa.gov",
	"*.github.nwave.noaa.gov"
];


var subnet_forward_list = [
	"198.18.8.66",
	// fw1-denv.erav.nwave.noaa.gov
 	"198.18.9.67",
	// fw1-denv.erav.nwave.noaa.gov
	"198.18.9.76",
	// mc1.denv.nwav.noaa.gov
	"198.18.9.82",
	// stfw01.ford.nwave.noaa.gov
	"198.18.36.86",
];

var nwave_lab_bastion_forward_list = [
	"proxmox-01.lab.nwave.noaa.gov",
	"192.168.255.*",
	"192.168.254.*",
	// opengear
	"192.168.0.1"
];

var fwd = {};
var lab_fwd = {};
for (var a = 0; a < nwave_bastion_forward_list.length; a += 1) {
	fwd[nwave_bastion_forward_list[a]] = true;
}
for (var b = 0; b < nwave_lab_bastion_forward_list.length; b += 1) {
	lab_fwd[nwave_lab_bastion_forward_list[b]] = true;
}
function FindProxyForURL(url, host) {
	for (var c = 0; c < nwave_bastion_forward_list.length; c += 1) {
		if(shExpMatch(host, nwave_bastion_forward_list[c]))
			return http_proxy;
	}
	for (var d = 0; d < nwave_lab_bastion_forward_list.length; d += 1) {
		if(shExpMatch(host, nwave_lab_bastion_forward_list[d]))
			return lab_http_proxy;
	}
	return direct;
}
