var direct = 'DIRECT';

var http_proxy = 'SOCKS 127.0.0.1:2002; SOCKS4 127.0.0.1:2002';
var lab_http_proxy = 'SOCKS 127.0.0.1:2003; SOCKS4 127.0.0.1:2003';

var combinedList = [
    { type: 'string', value: '*.wireless.nwave.noaa.gov' },
    { type: 'string', value: '*.erav.nwave.noaa.gov' },
    { type: 'string', value: 'ib.*.nwave.noaa.gov' },
    { type: 'string', value: 'infoblox*.ford.nwave.noaa.gov' },
    { type: 'string', value: 'awx.*.nwave.noaa.gov' },
    { type: 'string', value: 'auto-conf.*.nwave.noaa.gov' },
    { type: 'string', value: 'gnat.*.nwave.noaa.gov' },
    { type: 'string', value: 'stfw*.*.nwave.noaa.gov' },
    { type: 'string', value: 'cnfw*.*.nwave.noaa.gov' },
    { type: 'string', value: 'clfw*.*.nwave.noaa.gov' },
    { type: 'string', value: 'lgsv*.*.nwave.noaa.gov' },
    { type: 'string', value: 'fmsv.ctc.nwave.noaa.gov' },
    { type: 'string', value: 'fw1-clpk.erav.nwave.noaa.gov' },
    { type: 'string', value: 'fw1-denv.erav.nwave.noaa.gov' },
    { type: 'ip', value: '198.18.8.66' },
    { type: 'ip', value: '198.18.9.67' },
    { type: 'ip', value: '198.18.9.76' },
    { type: 'ip', value: '198.18.9.82' },
    { type: 'ip', value: '198.18.36.86' },
    { type: 'string', value: 'github.nwave.noaa.gov' },
    { type: 'string', value: '*.github.nwave.noaa.gov' }
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
