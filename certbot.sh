docker run -it --rm \
-v /root/2020QuackathonTeamHireUs/docker-volumes/cert_bot/certs/:/etc/letsencrypt \
-v /root/2020QuackathonTeamHireUs/docker-volumes/cert_bot/certs_data/:/var/lib/letsencrypt \
-v "/root/2020QuackathonTeamHireUs/docker-volumes/cert_bot/certbot_logs/:/var/log/letsencrypt" \
-v /root/2020QuackathonTeamHireUs/docker-volumes/cert_bot/certbot/root/:/root/ \
certbot/certbot \
certonly --manual --preferred-challenges dns \
--server https://acme-v02.api.letsencrypt.org/directory \
--manual-public-ip-logging-ok \
-d '*.virusvis.dumitruvulpe.com' -d  virusvis.dumitruvulpe.com