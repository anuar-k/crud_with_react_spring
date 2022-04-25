## youtube 강의 영상 소스
### 강의 제목: J204. Spring Boot + Security + JWT + keycloak
### 강의 주소: https://youtu.be/gEJpwogGbHw

### curl test
<pre><code>
curl -X POST "http://localhost:8080/auth/realms/my_realm/protocol/openid-connect/token" ^
--header "Content-Type: application/x-www-form-urlencoded" ^
--data-urlencode "grant_type=password" ^
--data-urlencode "client_id=my_client" ^
--data-urlencode "client_secret=957281a8-3fc0-446b-82a4-735ac9a64f45" ^
--data-urlencode "username=admin" ^
--data-urlencode "password=1" | jq

curl -X GET "http://localhost:8000/test/permitAll"

curl -X GET "http://localhost:8000/test/authenticated" ^
--header "Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2SThvZlZ6NnZHVV95RW5XbWMyUkRwZDNKOGFZWmQ2MjN5eTRob2wzX1BNIn0.eyJleHAiOjE2MjA0Mzg1ODIsImlhdCI6MTYyMDQzNDk4MiwianRpIjoiN2MyYTM3NTMtYzhlNi00NzAxLWFiNTUtYzQ3MTc4NTYxM2ZmIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL215X3JlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImM3MTU0YmVhLTAyZWQtNGMyMS1hNDA4LTIzZGNiZTZiYmQ2NSIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15X2NsaWVudCIsInNlc3Npb25fc3RhdGUiOiJjNTdjMzA5My0yNjgxLTQ3ZGItOTVmZC0xYzJmMGFlNmNiMWMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1teV9yZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJteV9jbGllbnQiOnsicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiJ9.cF-LLXUv2hJ9de8siwA_EzSNtC9LtNWQcjYthCrMyHWXzOkI--wwBfc2DaU4gkVvUYHDYWjtIQMtmmhnoW_00DTwb7nk1h82TN1mn-d6etOk-DONSGFpG4daWtzyE8dmQ6qmpc5NGFiYduCShsI8o0SVZlxQKpRUzj-fBNhJ0qPoauJub0trLh4tiYEdF2a0dtRn15L45aolNRHuE2vTSP8lboGBUHXgUwtbNekdr_N-WjGBvSKt8RGS0dxJWJgL-P3XXhaE3IWjCzhHYJHilBZVCTiNN6eWL0jqfo8HbYDcW1iTV4dLVSgeAdATQ5ZNH2eTWR8gOYzTWIsOZ-H-Bw"

curl -X GET "http://localhost:8000/test/admin" ^
--header "Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2SThvZlZ6NnZHVV95RW5XbWMyUkRwZDNKOGFZWmQ2MjN5eTRob2wzX1BNIn0.eyJleHAiOjE2MjA0Mzg1ODIsImlhdCI6MTYyMDQzNDk4MiwianRpIjoiN2MyYTM3NTMtYzhlNi00NzAxLWFiNTUtYzQ3MTc4NTYxM2ZmIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL215X3JlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImM3MTU0YmVhLTAyZWQtNGMyMS1hNDA4LTIzZGNiZTZiYmQ2NSIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15X2NsaWVudCIsInNlc3Npb25fc3RhdGUiOiJjNTdjMzA5My0yNjgxLTQ3ZGItOTVmZC0xYzJmMGFlNmNiMWMiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1teV9yZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJteV9jbGllbnQiOnsicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiJ9.cF-LLXUv2hJ9de8siwA_EzSNtC9LtNWQcjYthCrMyHWXzOkI--wwBfc2DaU4gkVvUYHDYWjtIQMtmmhnoW_00DTwb7nk1h82TN1mn-d6etOk-DONSGFpG4daWtzyE8dmQ6qmpc5NGFiYduCShsI8o0SVZlxQKpRUzj-fBNhJ0qPoauJub0trLh4tiYEdF2a0dtRn15L45aolNRHuE2vTSP8lboGBUHXgUwtbNekdr_N-WjGBvSKt8RGS0dxJWJgL-P3XXhaE3IWjCzhHYJHilBZVCTiNN6eWL0jqfo8HbYDcW1iTV4dLVSgeAdATQ5ZNH2eTWR8gOYzTWIsOZ-H-Bw"

curl -X GET "http://localhost:8000/test/admin" ^
--header "Authorization: bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2SThvZlZ6NnZHVV95RW5XbWMyUkRwZDNKOGFZWmQ2MjN5eTRob2wzX1BNIn0.eyJleHAiOjE2MjA0Mzg4MzMsImlhdCI6MTYyMDQzNTIzMywianRpIjoiNGMwMzk1ZWMtNjM1Yi00ODRhLWE5MjgtZmIyOWRlM2Q0OWMxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL215X3JlYWxtIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImM3MTU0YmVhLTAyZWQtNGMyMS1hNDA4LTIzZGNiZTZiYmQ2NSIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15X2NsaWVudCIsInNlc3Npb25fc3RhdGUiOiI1YjVjMjQzNS02ODJlLTQ0YTItOWQwYS0xM2I0MWNiMGU4ZWIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1teV9yZWFsbSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJteV9jbGllbnQiOnsicm9sZXMiOlsiUk9MRV9BRE1JTiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiJ9.CiUVC-hFV-BvNXbPWymMgRh189anmgjd719-F9ZK_MK70UQU-upW7bQTZF3Xio2i7F3k2t2zWgTlQZ1FWvlDDPOfVjwlcRUQEQ8HyIlyCjlZdgZatrCQrTSrZly2mEnyd94EoWAy-Bwwp9wdmAdcmogWMAnSd6y6Kyg8MMxmJ0Do6U_ulcjXnoTvlHWQiHOSCy7MKQXGJJYCN7swRhtpL3Hi-wbIaWFX32z2zPd8d8wuDJZJZTAtwet3me32MuQRhoRfB8Bon5YnbUfX4Lm2NjI2hhYw1mmNT9w_HW-h_wLojp6UHY6V5zKO6mGtfB6CFdRIU6FhVY-I-WiKmEUlPQ"
</code></pre>

#### keycloak download
- https://www.keycloak.org/downloads

#### keycloak 설정
1. realm 만들기
2. client 만들고 내부에 ROLE 생성하기
    - ROLE_ADMIN (실제 스프링에서 ADMIN 권한 맵핑)
    - ROLE_USER (실제 스프링에서 USER 권한 맵핑)
3. user 만들고 이전에 만들 ROLE 맵핑하기
    - user 에 여러 권한 맵핑이 가능


## youtube 강의 영상 소스
### 강의 제목: Docker +  Keycloak + MariaDB
### 강의 주소: https://youtu.be/hGYJ5H3tIZk

<pre><code>
docker network create keycloak-network

docker run -d --name mariadb_keycloak \
-e  DB_ADDR=mariadb_keycloak \
-v /app/mysql2:/var/lib/mysql \
--net keycloak-network \
-e MYSQL_ROOT_PASSWORD=password \
-e MYSQL_DATABASE=keycloak \
-e MYSQL_USER=keycloak \
-e MYSQL_PASSWORD=password \
mariadb

docker run -d -p 8888:8080 \
--name keycloak  \
-e DB_VENDOR=mariadb \
-e DB_ADDR=mariadb_keycloak \
-e KEYCLOAK_USER=admin \
-e KEYCLOAK_PASSWORD=admin \
--net keycloak-network \
jboss/keycloak
</code></pre>

#### 리모트에서 붙기 옵션
-b 0.0.0.0 

#### user 만들기
./add-user-keycloak.sh -u admin -p admin

#### 포트 8080 + 808 = 8888 포트로 접속됨 
-Djboss.socket.binding.port-offset=808

