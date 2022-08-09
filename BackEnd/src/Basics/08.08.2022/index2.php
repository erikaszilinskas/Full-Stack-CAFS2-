<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <div class="form-style-2">
        <div class="form-style-2-heading">Registration to course</div>
        <form action="index.php" method="">
            <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="fname" value="" /></label>
            <label for="field2"><span>Surname <span class="required">*</span></span><input type="text" class="input-field" name="lname" value="" /></label>
            <label for="field3"><span>Cities</span><select name="cities" class="select-field">
                    <option name="Vilnius" value="cities">Vilnius</option>
                    <option name="Kaunas" value="cities">Kaunas</option>
                    <option name="Klaipeda" value="cities">Klaipeda</option>
                </select></label>
            <label for="message"><span>Message <span class="required">*</span></span><textarea name="message" class="textarea-field"></textarea></label>

            <label><span> </span><input type="submit" value="submit" /></label>
        </form>
    </div>
</body>

</html>