from curl_cffi import requests, CurlMime

cookies = {
    "csrftoken": "D7gP1kbWXgx50g7UO1rSakBRi9OU8tES",
    "LEETCODE_SESSION": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYXV0aF91c2VyX2lkIjoiMTQ2NDI2MDgiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6Ijc5ODQzMzcxMzU1ZjgzMmUzYjhiMDQzYzQ1N2YwMjkyZjE2ZDgxM2M1OWNhNWNhYjdmZThmYWY3YmU5MTE2MzciLCJzZXNzaW9uX3V1aWQiOiJjMzgwYzFkZCIsImlkIjoxNDY0MjYwOCwiZW1haWwiOiJzd2V0cmFqMjAwNDIwMDVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJTd2V0U2luZ2gwNSIsInVzZXJfc2x1ZyI6IlN3ZXRTaW5naDA1IiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUuY29tL3VzZXJzL1N3ZXRTaW5naDA1L2F2YXRhcl8xNzc1NjI3MTQ4LnBuZyIsInJlZnJlc2hlZF9hdCI6MTc3NTYyNzA2OSwiaXAiOiIyMDIuODMuMjkuNTAiLCJpZGVudGl0eSI6IjkxZTFhMmE0MWMwNzQxZjdmNDc2MTVhYjlkZTJmYjhhIiwiZGV2aWNlX3dpdGhfaXAiOlsiNWU1MTRlZTlmZmE0MmNkN2NmOGNkODlhN2Y3MzYxOTQiLCIyMDIuODMuMjkuNTAiXSwiX3Nlc3Npb25fZXhwaXJ5IjoxMjA5NjAwfQ.qWCF08mUVneE68cFhmqq-e4PlotV54a2pr6owmucors",
}

headers = {
    "accept": "application/json, text/plain, */*",
    "x-csrftoken": "D7gP1kbWXgx50g7UO1rSakBRi9OU8tES",
    "referer": "https://leetcode.com/",
    "origin": "https://leetcode.com",
}

mime = CurlMime()
mime.addpart(
    name="user_avatar",
    filename="avatar.gif",
    content_type="image/gif",
    local_path=r"C:\Users\swetr\Downloads\avatar_1757213043.gif",
)

response = requests.post(
    "https://leetcode.com/storage/upload/user_avatar/",
    headers=headers,
    cookies=cookies,
    multipart=mime,
    impersonate="chrome124",
)

print(response.status_code)
print(response.text)