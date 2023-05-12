window.onload = () => {
}

async function bookUserList() {
    const room_id = $('#selet_room_category').val()
    console.log(room_id)
    const response = await fetch(`http://127.0.0.1:8000/manager/customers/${room_id}/`, {
        headers: {
            'content-type': 'application/json',
        },
        method: 'GET',
    })

    const response_json = await response.json()
    $('#book_info').empty()
    response_json['book_set'].forEach((a) => {
        const num = a['id']
        const check_in = a['check_in']
        const check_out = a['check_out']
        const username = a['user_set']['username']
        const phone = a['user_set']['phone']
        const status = response_json['status']

        let temp_html = `<tr>
                            <th>${num}</th>
                            <td>${username}</td>
                            <td>${phone}</td>
                            <td>${check_in}</td>
                            <td>${check_out}</td>
                            <td>${status}</td>
                        </tr>`
        $('#book_info').append(temp_html)
    })
    // window.location.reload()
}