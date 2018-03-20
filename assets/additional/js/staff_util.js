//Function to prompt the user for deactivation confirmation
function deleteMemPrompt(member_id) {
    alertify.confirm("Confirm deactivate staff " + member_id + "?", function (e) {
        if (e) {
            $('#deleteMember').submit();
        }
    }).setting({
        'transition': 'zoom',
        'movable': false,
        'modal': true,
        'labels': {
            ok: 'Confirm',
            cancel: "Cancel"
        }
    }).setHeader("Delete Member Confirmation").show();
}