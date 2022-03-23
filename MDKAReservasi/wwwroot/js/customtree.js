$(document).ready(function () {
    //$('#rateMe1').mdbRate();

    $(".select-country").change(function () {
        $.ajax({
            method: "POST",
            url: "/Prospect/GetAsset",
            dataType: "json",
            data: { param: $(".select-country option:selected").val() }
        }).done(function (msg) {
            $('.select-asset').empty();
            $('.select-asset').append($('<option> SELECT ASSET </option>'));
            $.each(msg.ret, function (index, ret) {
                $('.select-asset').append($('<option value="' + ret.Value + '">' + ret.Text + '</option>'));
            });

            $('.select-asset').trigger("chosen:updated");
            $(".select-asset").prop('disabled', false);

            $('.select-area').empty();
            $('.select-area').append($('<option> SELECT AREA </option>'));
            $('.select-area').trigger("chosen:updated");
        });
    });
    $(".select-asset").change(function () {
        $.ajax({
            method: "POST",
            url: "/Prospect/GetArea",
            dataType: "json",
            data: { country: $(".select-country option:selected").val(), asset: $(".select-asset option:selected").val() }
        }).done(function (msg) {
            $('.select-area').empty();
            $('.select-area').append($('<option> SELECT AREA </option>'));
            $.each(msg.ret, function (index, ret) {
                $('.select-area').append($('<option value="' + ret.Value + '">' + ret.Text + '</option>'));
            });

            $('.select-area').trigger("chosen:updated");
            $(".select-area").prop('disabled', false);

            $('.select-block').empty();
            $('.select-block').append($('<option> SELECT BLOCK </option>'));
            $('.select-block').trigger("chosen:updated");
        });
    });

    $(".select-area").change(function () {
        $.ajax({
            method: "POST",
            url: "/Prospect/GetBlock",
            dataType: "json",
            data: { country: $(".select-country option:selected").val(), asset: $(".select-asset option:selected").val(), area: $(".select-area option:selected").val() }
        }).done(function (msg) {
            $('.select-block').empty();
            $('.select-block').append($('<option> SELECT BLOCK </option>'));
            $.each(msg.ret, function (index, ret) {
                $('.select-block').append($('<option value="' + ret.Value + '">' + ret.Text + '</option>'));
            });

            $('.select-block').trigger("chosen:updated");
            $(".select-block").prop('disabled', false);

            $('.select-field').empty();
            $('.select-field').append($('<option> SELECT FIELD </option>'));
            $('.select-field').trigger("chosen:updated");
        });
    });

    $(".select-block").change(function () {
        $.ajax({
            method: "POST",
            url: "/Prospect/GetField",
            dataType: "json",
            data: { country: $(".select-country option:selected").val(), asset: $(".select-asset option:selected").val(), area: $(".select-area option:selected").val(), block: $(".select-block option:selected").val() }
        }).done(function (msg) {
            $('.select-field').empty();
            $('.select-field').append($('<option> SELECT FIELD </option>'));
            $.each(msg.ret, function (index, ret) {
                $('.select-field').append($('<option value="' + ret.Value + '">' + ret.Text + '</option>'));
            });

            $('.select-field').trigger("chosen:updated");
            $(".select-field").prop('disabled', false);

            //$('.select-field').empty();
            //$('.select-field').append($('<option>-- Please Choose --</option>'));
            //$('.select-field').trigger("chosen:updated");
        });
    });



    if ($(".select-asset").val() != "") {
        $(".select-asset").prop('disabled', false);
    }
    if ($(".select-area").val() != "") {
        $(".select-area").prop('disabled', false);
    }
    if ($(".select-block").val() != "") {
        $(".select-block").prop('disabled', false);
    }
    if ($(".select-field").val() != "") {
        $(".select-field").prop('disabled', false);
    }



    $.fn.extend({
        treed: function (o) {

            var openedClass = 'icon-folder-open';
            var closedClass = 'icon-folder';

            if (typeof o != 'undefined') {
                if (typeof o.openedClass != 'undefined') {
                    openedClass = o.openedClass;
                }
                if (typeof o.closedClass != 'undefined') {
                    closedClass = o.closedClass;
                }
            };

            //initialize each of the top levels
            var tree = $(this);
            tree.addClass("tree");
            tree.find('li').has("ul").each(function () {
                var branch = $(this); //li with children ul
                branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
                branch.addClass('branch');
                branch.on('click', function (e) {
                    if (this == e.target) {
                        var icon = $(this).children('i:first');
                        icon.toggleClass(openedClass + " " + closedClass);
                        $(this).children().children().toggle();
                    }
                })
                branch.children().children().toggle();
            });
            //fire event from the dynamically added icon
            tree.find('.branch .indicator').each(function () {
                $(this).on('click', function () {
                    $(this).closest('li').click();
                });
            });
            //fire event to open branch if the li contains an anchor instead of text
            tree.find('.branch>a').each(function () {
                $(this).on('click', function (e) {
                    $(this).closest('li').click();
                    e.preventDefault();
                });
            });
            //fire event to open branch if the li contains a button instead of text
            tree.find('.branch>button').each(function () {
                $(this).on('click', function (e) {
                    $(this).closest('li').click();
                    e.preventDefault();
                });
            });
        }
    });

    //Initialization of treeviews

    $('#tree1').treed();

    $('#tree2').treed({ openedClass: 'icon-folder-open', closedClass: 'icon-folder' });

    $('#tree3').treed({ openedClass: 'icon-folder-open', closedClass: 'icon-folder-open' });


});
